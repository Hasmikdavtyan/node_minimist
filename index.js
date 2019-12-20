/*function test () {
    let x= 0;
    for (let i = 0; i < 1000000; i++){
    x = i}
    return x;
}


console.time ('func')
test()
console.timeEnd('func')*/


/*for (let i = 0; i < 4; i++){
    console.trace();
}*/
/*
console.log(process.title);
console.log(process.moduleLoadList);
console.log(prohcess.platform);
console.log(process.version);*/

/*const fs = require ('fs');

const args = process.argv.slice(2);

if (args[0]==='--file' && args[1]) {
    fs.readFile('./' + args[1] +'.txt', 'utf-8', (err, data)=>{
      console.log(data)
    })
}

if (args[0]==='--css' && args[1]) {
    fs.readFile('./'+ args[1] +'.css', 'utf-8', (err, data)=>{
      console.log(data)
    })
}*/

/*const fs = require('fs');

const arg = require ('minimist')(process.argv.slice(2));

const sendData = (fileName ) =>{
    fs.readFile(`./${fileName}`, 'utf-8', (err, data)=>{
        if ( err) {
            console.log ('${fileName}.txt not found');
        } else {
            console.log(data)
        }
}}


if (arg.f || arg.file) {
    const fileName = (arg.f || arg.file)
    sendData(`${fileName}.txt`)
}
const fileName = (arg.f || arg.file);
if (arg.f || arg.file) {
    fs.readFile(`./${fileName}` +'.txt', 'utf-8', (err, data)=>{
      if ( err) {
          console.log ('${fileName}.txt not found')
      } else {
          console.log(data)
      }
    })
}

*/
//promise kardal

/*const http = require('http');

const fs = require('fs');

const minimist = require ('minimist')(process.argv.slice(2))


http.createServer((req, res)=>{
   res.writeHead(200)

   if(minimist.e && minimist.fileName){
       if(minimist.e ==='txt'){
         if ( minimist.fileName ==="hello"){
             fs.readFile('./hello.txt', 'utf-8', (err,data)=>{
              if (err) {
                  
              }
              else {
                  res.write('data')
                  res.end
              }
             })
         }
       }

       if(minimist.e ==='html'){
        if ( minimist.fileName ==="main"){
            fs.readFile('./main.html', 'utf-8', (err,data)=>{
             if (err) {
                 
             }
             else {
                 res.write('data')
                 res.end
             }
            })
        }
      }

    else {
        res.write('hello World')
        res.end()
    }
   }
}).listen(3000);*/








/*

const http = require('http');

const fs = require('fs');

const {e, fileName} = require ('minimist')(process.argv.slice(2))


const sendData = (fileName, ext, res ) =>{
    fs.readFile(`./${fileName}.${ext}`, 'utf-8', (err, data)=>{
        let wdata = data; 
        let statusCode = 200;

        if ( err) {
            wdata = 'File is not found';
            statusCode = 404;
        }
        res.writeHead(statusCode, {'Content-Type':'text/html;charset-utf-8'});

            res.write('wdata');
                 res.end();
        }
    )};

http.createServer((req, res)=>{

   if(e && fileName){
       sendData( fileName, e, res )
   }

    else {
        res.writeHead(200, {'Content-Type':'text/html;charset-utf-8'});

        res.write('Hello World')
        res.end()
    }
   }).listen(3001)


*/



const http = require('http');
const fs =require('fs');
 const minimist=require('minimist')(process.argv.slice(2));

 const { e,fileName}=require('minimist')(process.argv.slice(2));

 function getStatusCode (res, statusCode = 200){
    res.writeHead(statusCode,{
        'Content-Type':"text/html;charset=utf-8"
   }); 

 }

 function getFileContent(fileName,ext,res){
  fs.readFile(`./${fileName}.${ext}`, 'utf-8', (err,data)=>{
        let wdata=data;

        if (err){
            getStatusCode (res, 404)
             wdata='File not found';
             res.write(wdata);
             res.end();
         } else {
   
       getStatusCode (res)
         res.write(wdata);
         res.end();
    }
      })
     };
    
 
 http.createServer((req, res) => {
   
    if (e && fileName){
           getFileContent(fileName,e,res)
         }else{
        getStatusCode (res)
      // res.writeHead(200, {'Content-Type':'text/html;charset-utf-8'});
   
         res.write('Hello, world');
         res.end();
     }

 }).listen(3001)





