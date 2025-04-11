const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src');

function renameJsToJsx(dir) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            renameJsToJsx(fullPath);
        } else if (path.extname(file) === '.js') {
            const newFilePath = fullPath.replace(/\.js$/, '.jsx');
            fs.renameSync(fullPath, newFilePath);
            console.log(`Renamed: ${fullPath} -> ${newFilePath}`);
        }
    });
}

renameJsToJsx(directory);