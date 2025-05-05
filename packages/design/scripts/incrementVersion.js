import fs from 'fs';
import path from 'path';
import semver from 'semver';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageJsonPath = path.resolve(__dirname, '../package.json');

function fetchNpmVersion(packageName) {
  return new Promise((resolve, reject) => {
    https.get(`https://registry.npmjs.org/${packageName}`, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const npmData = JSON.parse(data);
          const latestVersion = npmData['dist-tags']?.latest;
          resolve(latestVersion);
        } catch (error) {
          reject(new Error(`Failed to parse npm data: ${error.message}`));
        }
      });
    }).on('error', (error) => {
      reject(new Error(`Failed to fetch from npm: ${error.message}`));
    });
  });
}

async function incrementVersion() {
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const npmVersion = await fetchNpmVersion('@team-menyala/clover');
    
    if (!npmVersion) {
      console.error('No version found on npm registry');
      process.exit(1);
    }

    const incrementType = process.argv[2] || 'patch';
    
    if (!['patch', 'minor', 'major', 'prepatch', 'preminor', 'premajor', 'prerelease'].includes(incrementType)) {
      console.error('Invalid increment type. Use patch, minor, major, prepatch, preminor, premajor, or prerelease');
      process.exit(1);
    }

    const newVersion = semver.inc(npmVersion, incrementType);
    
    if (!newVersion) {
      console.error(`Failed to increment version: ${npmVersion}`);
      process.exit(1);
    }

    packageJson.version = newVersion;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    
    console.log(`Version updated: ${npmVersion} → ${newVersion}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

incrementVersion();