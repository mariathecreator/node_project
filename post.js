import express from 'express'
import mongoose from 'mongoose'
import cookieParser from "cookie-parser"
import session from "express-session"

import route from './Router/route.js'
import productroute from './Router/productroute.js'

const app = express()
const port = 3000;

app.set('view engine', 'ejs')

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))


let db;
const uri = 'mongodb://127.0.0.1:27017/postman'


await mongoose.connect(uri)
    .then(() => {
        console.log('sucess');
    })
    .catch((err) => {
        console.log(err);
    })

    
app.use(session({
   secret: 'norman@notagain',
   resave: false,
   saveUninitialized: false,
   cookie:{httpOnly:true,_expires:false}
}))


app.use(route)
app.use(productroute)

app.use((req,res,next)=>{
    res.locals.message=req.session.message;
    delete req.session.message
    console.log(res.locals.message);
    
    next()
}
)
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);

})