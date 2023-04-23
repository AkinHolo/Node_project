 
 
 const fs = require('fs');

 fs.readFile('welcome.txt', function(err, data){
    if(err){
        return console.err(err);
    }
    console.log("welcome.txt says:" + data.toString());
 });