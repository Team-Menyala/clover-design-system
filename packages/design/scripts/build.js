import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure directories exist
const distDir = path.join(__dirname, '..', 'dist');
const distFontsDir = path.join(distDir, 'fonts');
fs.mkdirSync(distFontsDir, { recursive: true });

// Copy fonts
const srcFontsDir = path.join(__dirname, '..', 'src', 'fonts');
const fontFiles = fs.readdirSync(srcFontsDir);

fontFiles.forEach(file => {
    const srcPath = path.join(srcFontsDir, file);
    const destPath = path.join(distFontsDir, file);
    fs.copyFileSync(srcPath, destPath);
});

// Copy style.css
const srcStylePath = path.join(__dirname, '..', 'src', 'style.css');
const destStylePath = path.join(distDir, 'style.css');
fs.copyFileSync(srcStylePath, destStylePath);

// Copy README.md from root to dist
const srcReadmePath = path.join(__dirname, '..', '..', '..', 'README.md');
const destReadmePath = path.join(__dirname, '..', 'README.md');
fs.copyFileSync(srcReadmePath, destReadmePath);

console.log('Assets copied successfully!');