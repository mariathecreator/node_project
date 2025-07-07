const m=require('fs')
const read=m.createReadStream('./hello.txt',{encoding:'utf-16'});
const write=m.createWriteStream('./hai.txt')

/*
//.on-eventlistener
read.on('data',(chunk)=>{
    console.log('--------------------------');
    
console.log(chunk);
write.write('\nNewChunk\n')
write.write(chunk);
})
*/
//does the same as above
read.pipe(write);
