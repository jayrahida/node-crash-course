const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => { //data event ('data' is reserved word)
//     console.log('--------------- NEW CHUNK ---------------');
//     console.log(chunk);
//     //console.log(chunk.toString());
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);