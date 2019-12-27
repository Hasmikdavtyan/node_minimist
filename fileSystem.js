const fs = require('fs')

fs.readdir('../node_minimist', (err, file)=>
    {  
        file.forEach(element => {
        fs.stat(element, (err, data)=> {  
          
          if (data.isFile()) {
                console.log(`${element}`) 
               
           }
           else if (data.isDirectory()) {
            fs.readdir( element, (err, obj)  => {
            console.log(` There are  files of <<${element} >> directory ${obj}\n`) 
            })
       }
        });          
    })

})
   