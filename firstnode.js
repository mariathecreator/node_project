//let a=10;
//console.log(a)
//var name='maria';
//const greet=(name)=>{
//console.log(`hello,${name}`);
//}
//greet("maria");
//console.log(global);
//setTimeout(()=>{
//    console.log('exploding like fireworks in the sky');
//},2000)
//console.log(__dirname);
//console.log(__filename);

//const {name,triangle}= require('./next');
//console.log(name,triangle)
//const window=require('os')
//console.log(window.networkInterfaces())


const n =require('fs')
/*
//read file system
n.readFile('./hai.txt',(err,data)=>{
    if(err){
        console.log(err);
        
    }
    console.log(data.toString);
    
})
    */
/*
//write a file
n.writeFile('./hai.txt','how are you',(err)=>{
    if(err){
        console.log(err);
        
    }
        else{
    console.log('succefull');
}
})
    */
/*
//directories
//mkdir-make_directory
if(!n.existsSync('./node-crash')){
n.mkdir('./node-crash',(err)=>{
    if(err){
        console.log(err);
    }
    else{
    console.log('directory created');
    }  
})
}
//rmdir-remove_directory
else{
    n.rmdir('./node-crash',(err)=>{
        if(err){
            console.log(err);
            
        }
        console.log('folder deleted');
        
    })
}
    */
/*
//delete file
if(n.existsSync('./hello.txt')){
    n.unlink('./hello.txt',(err)=>{
        if(err){
            console.log(err);
            
        }
        console.log('file deleted ');
        
    })
}
//create the file
else{
    n.writeFile('./hello.txt','hello guuyzzz',(err)=>{
        if(err){
            console.log(err);
            
        }
        console.log('file created');
        
    })
}
    */