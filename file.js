const fs = require('fs');

//reading files
fs.readFile('./docs/blog.txt', (errX, htmlX) => { //error, buffer
    if(errX) {
        console.log(errX);
    }
    else{
        console.log(htmlX);
        console.log(htmlX.toString());
    }
    
});

console.log('im here');

//writing files
fs.writeFile('./docs/blog.txt', 'Hello Niknokerz!', () => {
  console.log('file was written');
})

fs.writeFile('./docs/blog1.txt', 'Hello World!', () => {
    console.log('file was written');
  })

  
//directories
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (exx) => {
        if(exx){
            console.log(exx);
        }
        else console.log('folder created')
    })
} else
{
    console.log('folder exists. deleting..');
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('folder deleted');
    })

} 

//deleting files
if(fs.existsSync('./docs/blog1.txt')) {
    fs.unlink('./docs/blog1.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file deleted');
    });    
}



//deleting files