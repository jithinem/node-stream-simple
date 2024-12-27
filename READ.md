Explanation:
fs.createWriteStream: Creates a writable stream to the file output.txt.
write(): Adds data to the stream.
end(): Signals the end of the stream and optionally writes the last chunk of data.
finish event: Triggered when all data has been flushed to the file.
error event: Handles any errors during the write process.
Run this script, and it will create or overwrite output.txt with the specified content.