const fs = require('fs');

const startMarker = '';
const endMarker = '';
const readmePath = 'README.md';

const date = new Date();
const timeString = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
});

let readmeContent = fs.readFileSync(readmePath, 'utf8');

const newContent = `${startMarker}\n## Current Time: ${timeString}\n${endMarker}`;

const updatedContent = readmeContent.replace(
    new RegExp(startMarker + '[\\s\\S]*?' + endMarker, 'g'),
    newContent
);

fs.writeFileSync(readmePath, updatedContent);
