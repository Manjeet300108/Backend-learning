const fs = require('fs');

//?writeFile
fs.writeFile("hello.txt", 'Hello Myself Manjeet', function (err) {
    if (err) console.log(err)
    else console.log('done')
})

//?appendFile 
// fs.appendFile('hello.txt', 'i am learning backend', function (err) {
//     if (err) console.log(err)
//     else console.log("append done")
// })

//?rename
// fs.rename('hello.txt', 'new.txt', function (err) {
//     if (err) console.log(err)
//     else console.log('rename done')
// })

// fs.appendFile('new.txt',' Hello My self Manjeet singh',function(err){
//     if(err) console.log(err)
//         else console.log('done')
// })

//?copy file
// fs.copyFile('new.txt', './copy/copy.txt', function (err) {
//     if (err) console.log(err)
//     else console.log('done')
// })

//?unlink file --> delete file
// fs.unlink('new.txt',function(err){
//     if(err) console.log(err)
//         else console.log('done')
// })

//?Remove folder
// fs.rm('./copy',{recursive:true,force : true},function(err){
//     if(err) console.log(err.message)
//         else console.log('removed')
// })

//?Read file
// fs.readFile('hello.txt', "utf8", function (err, data) {
//     if (err) throw err;
//     else console.log(data)
// })

//?Make folder
// fs.mkdir('copy', function (err) {
//     if (err) throw err
//     else console.log("folder created")
// })

// fs.copyFile('hello.txt','./copy/new.txt',function(err){
//     if(err) throw err;
//     else console.log('file copied');
// })

//?Read file in a folder
// fs.readdir('./copy',function(err,files){
//     if(err) throw err;
//     else console.log(files)
// })

//?Read file from a folder
// fs.readdir('./copy',function(err,files){
//     files.forEach(function(file){
//         fs.readFile(`./copy/${file}`,'utf-8',function(err,data){
//             if(err) throw err;
//             else console.log(`data of ${file}`)
//             console.log(data)
//         })
//     })
// })