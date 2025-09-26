#!/usr/bin/env node

/**
 * Comprehensive Testing Diagnostics
 * Run this script to test all aspects of your system
 */

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Running Comprehensive System Diagnostics...\n');

// Test 1: Environment Variables
console.log('1️⃣ Testing Environment Configuration...');
const requiredEnvVars = [
    'VITE_XANO_ANIMALS_URL',
    'VITE_XANO_ORGANIZATIONS_URL', 
    'VITE_XANO_ANIMALS_TOKEN',
    'PUBLIC_ORG_ID'
];

requiredEnvVars.forEach(envVar => {
    const value = process.env[envVar];
    console.log(`   ${envVar}: ${value ? '✅ Set' : '❌ Missing'}`);
});

// Test 2: API Endpoints
console.log('\n2️⃣ Testing API Endpoints...');
const endpoints = [
    'http://localhost:4322/api/admin/animals',
    'http://localhost:4322/api/admin/organization'
];

for (const endpoint of endpoints) {
    try {
        console.log(`   Testing: ${endpoint}`);
        // Note: This would need to be run when server is running
        console.log(`   ⏳ Manual test required - check in browser`);
    } catch (error) {
        console.log(`   ❌ Error: ${error.message}`);
    }
}

// Test 3: File Structure
console.log('\n3️⃣ Testing File Structure...');
const requiredFiles = [
    'happy-paws-site/.env',
    'happy-paws-site/src/pages/api/admin/animals.js',
    'happy-paws-site/public/admin/index.html'
];

requiredFiles.forEach(file => {
    try {
        const fs = await import('fs');
        const exists = fs.existsSync(path.join(__dirname, file));
        console.log(`   ${file}: ${exists ? '✅ Exists' : '❌ Missing'}`);
    } catch (error) {
        console.log(`   ${file}: ❌ Error checking`);
    }
});

console.log('\n🎯 Diagnostic Summary:');
console.log('   Run this script to identify configuration issues');
console.log('   Check browser console for runtime errors');
console.log('   Verify network requests in browser dev tools');
