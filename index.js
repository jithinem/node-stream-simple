const fs = require('fs');

// Create a writable stream
const writeStream = fs.createWriteStream('output.txt');

// Write data to the stream
writeStream.write('Hello, ');
writeStream.write('this is a simple example of WriteStream in Node.js!\n');

// End the stream
writeStream.end('Stream ended.\n');

writeStream.on('finish', () => {
  console.log('All data has been written to the file.');
});

// Handle errors
writeStream.on('error', (err) => {
  console.error('An error occurred:', err);
});
