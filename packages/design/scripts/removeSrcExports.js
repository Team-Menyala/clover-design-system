import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
    const packagePath = path.join(__dirname, '..', 'package.json');
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

    // Remove the src exports if it exists
    if (pkg.exports && pkg.exports['./src/*']) {
        delete pkg.exports['./src/*'];
    }

    // Write the updated package.json
    fs.writeFileSync(
        packagePath,
        JSON.stringify(pkg, null, 2) + '\n',
        'utf8'
    );

    console.log('Successfully removed src exports from package.json');
} catch (error) {
    console.error('Error updating package.json:', error);
    process.exit(1);
}