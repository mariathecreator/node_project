const n= require('http')
const m=require('fs')
const s=n.createServer((req,res)=>{
    //request to the server
console.log(req.url);
console.log(req.method);
//response back to the server
res.setHeader('Content_Type','text/html')
/*
res.write('<h1>kyaa hogoya?</h1>')
res.write('<p>Kaise log rahe ho?</p>')
res.end()
*/if(!m.existsSync('./server.html')){
    m.writeFile('./server.html','.html',(err,data)=>{
        if(err)
       { console.log(err);}
        else{
            console.log(data);
            
        }
    })
}
else{
m.readFile('./server.html',(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else{
    res.write(data);
    console.log(data);
    
    res.end();
   } 
})
}
})
//listen to the client req
s.listen(3000,'localhost',()=>{
    console.log('listening to request');
    
})