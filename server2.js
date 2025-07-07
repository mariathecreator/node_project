const n = require('http')
const m = require('fs');
const { log } = require('console');
const s = n.createServer((req, res) => {
    console.log(req.url);

    res.setHeader('Content_Type', 'text/html')

    let p = './plain/';
    switch (req.url) {
        case '/':
            p += 'index.html';
            res.statusCode=200;
            break;
        case '/about':
            p += 'about.html';
            res.statusCode=200;
            break;
             case '/about-me':
     res.setHeader('Location','/about')
     res.statusCode=301;
     res.end();
     break;
        default:
            p += '404.html';
            res.statusCode=404;
            break;
    }
    m.readFile(p, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
          // res.write(data);
            res.end(data);
        }
    })
})
s.listen(3000, 'localhost', () => {
    console.log('listening to request');

})