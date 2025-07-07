const n=require('http')
const m=require('fs');
const { log } = require('console');
const s=n.createServer((req,res)=>{
    res.setHeader('Content_Type','text/html')
    m.readFile('./index.html',(err,data)=>{
        if(err){
        console.log(err);
        res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
})
s.listen(3000,'localhost',()=>{
    console.log('listening to request');
    
})