import { useEffect, useState, useCallback } from "react";

export interface AuthUser {
  id: string;
  email: string;
  role: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const checkSession = useCallback(async () => {
    const token = localStorage.getItem("cybaem_auth_token");
    if (!token) {
      setUser(null);
      setIsAdmin(false);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/auth.php?action=check", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser({
          id: String(data.user_id),
          email: data.email,
          role: data.role,
        });
        setIsAdmin(data.role === "admin");
      } else {
        localStorage.removeItem("cybaem_auth_token");
        setUser(null);
        setIsAdmin(false);
      }
    } catch (err) {
      console.error("[Auth] Session check failed:", err);
      localStorage.removeItem("cybaem_auth_token");
      setUser(null);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  const signOut = async () => {
    localStorage.removeItem("cybaem_auth_token");
    setUser(null);
    setIsAdmin(false);
  };

  return { user, loading, isAdmin, signOut, checkSession };
};
