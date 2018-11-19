const fs=require('fs');


// assyncronous
fs.readdir('./',function(err,files){
    if(err) console.log('error',err);
    else console.log('result',files);
    });