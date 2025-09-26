#!/usr/bin/env node

/**
 * Generate Organization-Specific Site
 * 
 * This script creates a new site for a specific organization by:
 * 1. Copying the template
 * 2. Setting the organization ID in environment variables
 * 3. Optionally fetching organization data from Xano to populate config
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get command line arguments
const args = process.argv.slice(2);
const orgId = args[0];
const siteName = args[1] || `${orgId}-site`;

if (!orgId) {
  console.error('❌ Error: Organization ID is required');
  console.log('Usage: node scripts/generate-org-site.js <orgId> [siteName]');
  console.log('Example: node scripts/generate-org-site.js happy-paws-rescue my-rescue-site');
  process.exit(1);
}

console.log(`🚀 Generating site for organization: ${orgId}`);
console.log(`📁 Site directory: ${siteName}`);

// Paths
const templateDir = path.join(__dirname, '..');
const targetDir = path.join(process.cwd(), siteName);

// Check if target directory already exists
if (fs.existsSync(targetDir)) {
  console.error(`❌ Error: Directory ${siteName} already exists`);
  process.exit(1);
}

// Copy template to new directory
console.log('📋 Copying template files...');
copyDirectory(templateDir, targetDir);

// Create organization-specific .env file
console.log('⚙️ Creating environment configuration...');
createEnvFile(targetDir, orgId);

// Update package.json with new name
console.log('📦 Updating package.json...');
updatePackageJson(targetDir, siteName, orgId);

console.log('✅ Site generation complete!');
console.log('');
console.log('🎯 Next steps:');
console.log(`1. cd ${siteName}`);
console.log('2. Update .env with your Xano workspace URL');
console.log('3. npm install');
console.log('4. npm run dev');
console.log('');
console.log('📖 See XANO-SETUP.md for detailed configuration instructions');

/**
 * Copy directory recursively, excluding certain files/folders
 */
function copyDirectory(src, dest) {
  const excludePatterns = [
    'node_modules',
    '.git',
    'dist',
    '.astro',
    '.env',
    '.DS_Store'
  ];

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    // Skip excluded patterns
    if (excludePatterns.some(pattern => entry.name.includes(pattern))) {
      continue;
    }

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Create .env file with organization-specific configuration
 */
function createEnvFile(targetDir, orgId) {
  const envContent = `# Xano Multi-Tenant Configuration for ${orgId}
# Update PUBLIC_XANO_BASE_URL with your actual Xano workspace URL

# Your Xano workspace URL
PUBLIC_XANO_BASE_URL=https://your-workspace-id.us-east-1.xano.io/api:version

# Organization ID for this specific rescue site
PUBLIC_ORG_ID=${orgId}

# Optional: API Key if your endpoints require authentication
# XANO_API_KEY=your-api-key-if-needed

# Environment
NODE_ENV=development
`;

  fs.writeFileSync(path.join(targetDir, '.env'), envContent);
}

/**
 * Update package.json with organization-specific information
 */
function updatePackageJson(targetDir, siteName, orgId) {
  const packageJsonPath = path.join(targetDir, 'package.json');
  
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Update name and description
    packageJson.name = siteName;
    packageJson.description = `Animal rescue website for ${orgId}`;
    
    // Add organization-specific metadata
    packageJson.organization = {
      id: orgId,
      type: 'animal-rescue'
    };
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  }
}
