import fs from 'fs';

export const writeToFile = (filePath, fileContent) => {
    fs.writeFileSync(filePath, fileContent);
};