const fs = require('fs');
const contenu = process.argv[2];
fs.readFile(contenu, (err,data)=>{
    if (err){
        console.log('can not read the file')}
    else{
        console.log(((data.toString()).split ('\n')).length-1);

        }
    
})