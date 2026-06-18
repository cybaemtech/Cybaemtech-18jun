<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

$host = "localhost";
$dbname = "cybaemtech_contact_form_v2";
$username = "cybaemtech_contact_user_v2";
$password = "Cybaem@2025";

try {
    // Enable exception throwing for mysqli (PHP 8.1+ default, but forcing it ensures we catch it)
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    $conn = new mysqli($host, $username, $password, $dbname);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);
    exit();
}

// Create blog_posts table if not exists
$conn->query("CREATE TABLE IF NOT EXISTS blog_posts (
    id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) NOT NULL UNIQUE,
    excerpt TEXT,
    content LONGTEXT NOT NULL,
    cover_image TEXT,
    author VARCHAR(255) NOT NULL DEFAULT 'Cybaem Tech',
    category VARCHAR(255),
    tags TEXT,
    published TINYINT(1) NOT NULL DEFAULT 0,
    published_at DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)");

// If table is empty, auto-migrate from Google Sheets
$countResult = $conn->query("SELECT COUNT(*) as count FROM blog_posts");
$countRow = $countResult ? $countResult->fetch_assoc() : null;
if ($countRow && $countRow['count'] == 0) {
    $sheet_url = "https://docs.google.com/spreadsheets/d/1fI_YaQF9y53wjRBKwi_T7SGCTqkz_1gLDvWbA1zp8P4/gviz/tq?tqx=out:json&sheet=Sheet1";
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $sheet_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 15);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($ch);
    curl_close($ch);

    if ($response && strpos($response, 'table') !== false) {
        $jsonString = substr($response, 47, strlen($response) - 49);
        $json = json_decode($jsonString, true);
        if ($json && isset($json['table']['rows'])) {
            $headers = [];
            if (isset($json['table']['rows'][0]['c'])) {
                foreach ($json['table']['rows'][0]['c'] as $col) {
                    $headers[] = $col['v'] ?? null;
                }
            }

            $rows = array_slice($json['table']['rows'], 1);
            $index = 0;
            foreach ($rows as $row) {
                if (!isset($row['c'])) continue;
                $obj = [];
                foreach ($row['c'] as $i => $cell) {
                    if (isset($headers[$i])) {
                        $obj[$headers[$i]] = $cell['v'] ?? null;
                    }
                }

                if (isset($obj['Blog']) && $obj['Blog'] === 'YES' && isset($obj['Post Text'])) {
                    $post_id = $obj['Post ID'] ?? sprintf('%s-%s-%s-%s-%s',
                        bin2hex(random_bytes(4)),
                        bin2hex(random_bytes(2)),
                        bin2hex(random_bytes(2)),
                        bin2hex(random_bytes(2)),
                        bin2hex(random_bytes(6))
                    );
                    
                    $raw_text = $obj['Post Text'];
                    
                    // Format content: convert newlines to <br/><br/> and clean hashtags format
                    $formatted_content = preg_replace('/\{hashtag\|\\\\?#\|([^}]+)\}/', '#$1', $raw_text);
                    $formatted_content = nl2br(htmlspecialchars($formatted_content));
                    
                    // Excerpt is first 180 chars
                    $clean_excerpt = preg_replace('/\{hashtag\|\\\\?#\|([^}]+)\}/', '#$1', $raw_text);
                    $excerpt = substr($clean_excerpt, 0, 180);
                    if (strlen($clean_excerpt) > 180) {
                        $excerpt .= '...';
                    }
                    
                    // Title is first 70 chars
                    $title = substr($clean_excerpt, 0, 70);
                    if (strlen($clean_excerpt) > 70) {
                        $title .= '...';
                    }
                    
                    $slug = 'linkedin-post-' . $index;
                    $cover_image = $obj['Image URL'] ?? null;
                    $published_at = $obj['Published Date'] ?? date('Y-m-d H:i:s');
                    $category = $obj['Category'] ?? 'LinkedIn';
                    
                    $stmt = $conn->prepare("INSERT INTO blog_posts (id, title, slug, excerpt, content, cover_image, author, category, published, published_at) VALUES (?, ?, ?, ?, ?, ?, 'Cybaem Tech', ?, 1, ?)");
                    if ($stmt) {
                        $stmt->bind_param("sssssssss", $post_id, $title, $slug, $excerpt, $formatted_content, $cover_image, $category, $published_at);
                        $stmt->execute();
                        $stmt->close();
                    }
                    
                    $index++;
                }
            }
        }
    }
}

// Auth helper
$SECRET_KEY = "cybaem_auth_secret_2025_x9k2m";

function validateToken($token) {
    global $SECRET_KEY;
    $parts = explode(".", $token);
    if (count($parts) !== 2) return null;
    $payload = base64_decode($parts[0]);
    $signature = $parts[1];
    $expectedSig = hash_hmac('sha256', $payload, $SECRET_KEY);
    if (!hash_equals($expectedSig, $signature)) return null;
    $data = json_decode($payload, true);
    if (!$data || $data['exp'] < time()) return null;
    return $data;
}

function requireAdmin() {
    $headers = getallheaders();
    $auth = $headers['Authorization'] ?? $headers['authorization'] ?? '';
    
    // Fallback: Apache often strips Authorization header
    if (empty($auth)) {
        $auth = $_SERVER['HTTP_AUTHORIZATION'] 
            ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] 
            ?? '';
    }
    if (empty($auth) && function_exists('apache_request_headers')) {
        $apacheHeaders = apache_request_headers();
        $auth = $apacheHeaders['Authorization'] ?? $apacheHeaders['authorization'] ?? '';
    }
    
    $token = (strncmp($auth, 'Bearer ', 7) === 0) ? substr($auth, 7) : null;
    
    if (!$token) {
        http_response_code(401);
        echo json_encode(["error" => "Authentication required"]);
        exit();
    }
    
    $user = validateToken($token);
    if (!$user || $user['role'] !== 'admin') {
        http_response_code(403);
        echo json_encode(["error" => "Admin access required"]);
        exit();
    }
    
    return $user;
}

$action = $_GET['action'] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
$input = [];
if (strpos($contentType, 'application/json') !== false) {
    $input = json_decode(file_get_contents("php://input"), true) ?? [];
}

switch ($action) {
    // PUBLIC: Force sync from Google Sheets
    case 'sync-sheets':
        // 1. Fetch from Google Sheet
        $sheet_url = "https://docs.google.com/spreadsheets/d/1fI_YaQF9y53wjRBKwi_T7SGCTqkz_1gLDvWbA1zp8P4/gviz/tq?tqx=out:json&sheet=Sheet1";
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $sheet_url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $response = curl_exec($ch);
        curl_close($ch);

        if (!$response || strpos($response, 'table') === false) {
            http_response_code(500);
            echo json_encode(["error" => "Failed to fetch from Google Sheets"]);
            exit();
        }

        $jsonString = substr($response, 47, strlen($response) - 49);
        $json = json_decode($jsonString, true);
        if (!$json || !isset($json['table']['rows'])) {
            http_response_code(500);
            echo json_encode(["error" => "Failed to parse Google Sheets data"]);
            exit();
        }

        // 2. Clear existing posts to remove test posts
        $conn->query("TRUNCATE TABLE blog_posts");

        // 3. Insert fresh posts from Google Sheet
        $headers = [];
        if (isset($json['table']['rows'][0]['c'])) {
            foreach ($json['table']['rows'][0]['c'] as $col) {
                $headers[] = $col['v'] ?? null;
            }
        }

        $rows = array_slice($json['table']['rows'], 1);
        $index = 0;
        $count = 0;
        foreach ($rows as $row) {
            if (!isset($row['c'])) continue;
            $obj = [];
            foreach ($row['c'] as $i => $cell) {
                if (isset($headers[$i])) {
                    $obj[$headers[$i]] = $cell['v'] ?? null;
                }
            }

            if (isset($obj['Blog']) && $obj['Blog'] === 'YES' && isset($obj['Post Text'])) {
                $post_id = $obj['Post ID'] ?? sprintf('%s-%s-%s-%s-%s',
                    bin2hex(random_bytes(4)),
                    bin2hex(random_bytes(2)),
                    bin2hex(random_bytes(2)),
                    bin2hex(random_bytes(2)),
                    bin2hex(random_bytes(6))
                );
                
                $raw_text = $obj['Post Text'];
                
                // Format content: convert newlines to <br/><br/> and clean hashtags format
                $formatted_content = preg_replace('/\{hashtag\|\\\\?#\|([^}]+)\}/', '#$1', $raw_text);
                $formatted_content = nl2br(htmlspecialchars($formatted_content));
                
                // Excerpt is first 180 chars
                $clean_excerpt = preg_replace('/\{hashtag\|\\\\?#\|([^}]+)\}/', '#$1', $raw_text);
                $excerpt = substr($clean_excerpt, 0, 180);
                if (strlen($clean_excerpt) > 180) {
                    $excerpt .= '...';
                }
                
                // Title is first 70 chars
                $title = substr($clean_excerpt, 0, 70);
                if (strlen($clean_excerpt) > 70) {
                    $title .= '...';
                }
                
                $slug = 'linkedin-post-' . $index;
                $cover_image = $obj['Image URL'] ?? null;
                $published_at = $obj['Published Date'] ?? date('Y-m-d H:i:s');
                $category = $obj['Category'] ?? 'LinkedIn';
                
                $stmt = $conn->prepare("INSERT INTO blog_posts (id, title, slug, excerpt, content, cover_image, author, category, published, published_at) VALUES (?, ?, ?, ?, ?, ?, 'Cybaem Tech', ?, 1, ?)");
                if ($stmt) {
                    $stmt->bind_param("sssssssss", $post_id, $title, $slug, $excerpt, $formatted_content, $cover_image, $category, $published_at);
                    $stmt->execute();
                    $stmt->close();
                    $count++;
                }
                
                $index++;
            }
        }

        echo json_encode(["success" => true, "message" => "Sync complete! Imported {$count} blog posts from Google Sheets."]);
        break;

    // PUBLIC: List published posts
    case 'list':
        $stmt = $conn->prepare("SELECT id, title, slug, excerpt, cover_image, author, category, published_at 
            FROM blog_posts WHERE published = 1 ORDER BY published_at DESC");
        $stmt->execute();
        $result = $stmt->get_result();
        $posts = [];
        while ($row = $result->fetch_assoc()) {
            $posts[] = $row;
        }
        $stmt->close();
        echo json_encode($posts);
        break;

    // PUBLIC: Get single post by slug
    case 'get':
        $slug = $_GET['slug'] ?? '';
        if (empty($slug)) {
            http_response_code(400);
            echo json_encode(["error" => "Slug is required"]);
            exit();
        }
        
        $stmt = $conn->prepare("SELECT * FROM blog_posts WHERE slug = ? AND published = 1");
        $stmt->bind_param("s", $slug);
        $stmt->execute();
        $result = $stmt->get_result();
        $post = $result->fetch_assoc();
        $stmt->close();
        
        if (!$post) {
            http_response_code(404);
            echo json_encode(["error" => "Post not found"]);
            exit();
        }
        
        // Parse tags from comma-separated string to array
        if ($post['tags']) {
            $post['tags'] = array_map('trim', explode(',', $post['tags']));
        } else {
            $post['tags'] = [];
        }
        $post['published'] = (bool)$post['published'];
        
        echo json_encode($post);
        break;

    // ADMIN: List all posts (including drafts)
    case 'admin-list':
        requireAdmin();
        
        $stmt = $conn->prepare("SELECT * FROM blog_posts ORDER BY created_at DESC");
        $stmt->execute();
        $result = $stmt->get_result();
        $posts = [];
        while ($row = $result->fetch_assoc()) {
            if ($row['tags']) {
                $row['tags'] = array_map('trim', explode(',', $row['tags']));
            } else {
                $row['tags'] = [];
            }
            $row['published'] = (bool)$row['published'];
            $posts[] = $row;
        }
        $stmt->close();
        echo json_encode($posts);
        break;

    // ADMIN: Create post
    case 'create':
        requireAdmin();
        
        $title = $input['title'] ?? '';
        $slug = $input['slug'] ?? '';
        $excerpt = $input['excerpt'] ?? null;
        $content = $input['content'] ?? '';
        $cover_image = $input['cover_image'] ?? null;
        $author = $input['author'] ?? 'Cybaem Tech';
        $category = $input['category'] ?? null;
        $tags = $input['tags'] ?? null;
        $published = $input['published'] ?? false;
        $published_at = $published ? date('Y-m-d H:i:s') : null;
        
        if (empty($title) || empty($content)) {
            http_response_code(400);
            echo json_encode(["error" => "Title and content are required"]);
            exit();
        }
        
        // Tags: if array, join to comma-separated string
        if (is_array($tags)) {
            $tags = implode(', ', $tags);
        }
        
        $id = sprintf('%s-%s-%s-%s-%s',
            bin2hex(random_bytes(4)),
            bin2hex(random_bytes(2)),
            bin2hex(random_bytes(2)),
            bin2hex(random_bytes(2)),
            bin2hex(random_bytes(6))
        );
        
        $pub_int = $published ? 1 : 0;
        $stmt = $conn->prepare("INSERT INTO blog_posts (id, title, slug, excerpt, content, cover_image, author, category, tags, published, published_at) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssssssss", $id, $title, $slug, $excerpt, $content, $cover_image, $author, $category, $tags, $pub_int, $published_at);
        
        if ($stmt->execute()) {
            echo json_encode(["success" => true, "id" => $id]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Failed to create post: " . $stmt->error]);
        }
        $stmt->close();
        break;

    // ADMIN: Update post
    case 'update':
        requireAdmin();
        
        $id = $input['id'] ?? '';
        if (empty($id)) {
            http_response_code(400);
            echo json_encode(["error" => "Post ID is required"]);
            exit();
        }
        
        $title = $input['title'] ?? '';
        $slug = $input['slug'] ?? '';
        $excerpt = $input['excerpt'] ?? null;
        $content = $input['content'] ?? '';
        $cover_image = $input['cover_image'] ?? null;
        $author = $input['author'] ?? 'Cybaem Tech';
        $category = $input['category'] ?? null;
        $tags = $input['tags'] ?? null;
        $published = $input['published'] ?? false;
        $published_at = $published ? date('Y-m-d H:i:s') : null;
        
        if (is_array($tags)) {
            $tags = implode(', ', $tags);
        }
        
        $pub_int = $published ? 1 : 0;
        $stmt = $conn->prepare("UPDATE blog_posts SET title=?, slug=?, excerpt=?, content=?, cover_image=?, author=?, category=?, tags=?, published=?, published_at=? WHERE id=?");
        $stmt->bind_param("sssssssssss", $title, $slug, $excerpt, $content, $cover_image, $author, $category, $tags, $pub_int, $published_at, $id);
        
        if ($stmt->execute()) {
            echo json_encode(["success" => true]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Failed to update post: " . $stmt->error]);
        }
        $stmt->close();
        break;

    // ADMIN: Delete post
    case 'delete':
        requireAdmin();
        
        $id = $input['id'] ?? ($_GET['id'] ?? '');
        if (empty($id)) {
            http_response_code(400);
            echo json_encode(["error" => "Post ID is required"]);
            exit();
        }
        
        $stmt = $conn->prepare("DELETE FROM blog_posts WHERE id = ?");
        $stmt->bind_param("s", $id);
        
        if ($stmt->execute()) {
            echo json_encode(["success" => true]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Failed to delete post"]);
        }
        $stmt->close();
        break;

    default:
        http_response_code(400);
        echo json_encode(["error" => "Invalid action. Use ?action=list|get|admin-list|create|update|delete"]);
        break;
}

$conn->close();
?>
