const fs = require('fs');
const path = require('path');

const mappings = [
  { file: 'src/pages/Blog.tsx', dataName: 'resourcesSeoData', dataImportPath: '@/data/seo/resourcesSeo' },
  { file: 'src/pages/WebSystems.tsx', dataName: 'webSystemsSeoData', dataImportPath: '@/data/seo/webSystemsSeo' },
  { file: 'src/pages/ManagedIT.tsx', dataName: 'managedItSeoData', dataImportPath: '@/data/seo/managedItSeo' },
  { file: 'src/pages/ITStaffAugmentation.tsx', dataName: 'itAugmentationSeoData', dataImportPath: '@/data/seo/itAugmentationSeo' },
  { file: 'src/pages/DigitalGrowth.tsx', dataName: 'digitalMarketingSeoData', dataImportPath: '@/data/seo/digitalMarketingSeo' },
  { file: 'src/pages/EnterpriseSoftware.tsx', dataName: 'enterpriseSoftwareSeoData', dataImportPath: '@/data/seo/enterpriseSoftwareSeo' },
  { file: 'src/pages/ITInfrastructure.tsx', dataName: 'itInfrastructureSeoData', dataImportPath: '@/data/seo/itInfrastructureSeo' },
];

for (const map of mappings) {
  const filePath = path.join(__dirname, '..', map.file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Add import if not exists
  if (!content.includes(map.dataImportPath)) {
    // find import SEOHead
    const importHeadMatch = content.match(/import SEOHead from ["']@\/components\/SEOHead["'];?/);
    if (importHeadMatch) {
      content = content.replace(
        importHeadMatch[0],
        `${importHeadMatch[0]}\nimport { ${map.dataName} } from "${map.dataImportPath}";`
      );
    } else {
        // if no SEOHead import, add both at top
        content = `import SEOHead from "@/components/SEOHead";\nimport { ${map.dataName} } from "${map.dataImportPath}";\n` + content;
    }
  }

  // Replace <SEOHead /> or <SEOHead>...</SEOHead> with the new one
  // Be careful not to replace one that's already configured
  if (content.includes(`<SEOHead />`) || content.match(/<SEOHead\s*\n\s*\/>/)) {
    const replacement = `<SEOHead
        title={${map.dataName}.title}
        description={${map.dataName}.description}
        canonical={${map.dataName}.canonical}
        keywords={${map.dataName}.keywords}
        ogTitle={${map.dataName}.ogTitle}
        ogDescription={${map.dataName}.ogDescription}
        twitterTitle={${map.dataName}.twitterTitle}
        twitterDescription={${map.dataName}.twitterDescription}
        jsonLd={${map.dataName}.jsonLd}
      />`;
    
    content = content.replace(/<SEOHead\s*\/>/, replacement);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${map.file}`);
}
