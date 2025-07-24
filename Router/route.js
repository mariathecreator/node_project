import express from 'express'

const route = express.Router()

//import {insert,find,del,update } from '../Controller/controller.js'
import { login, signup, register, dash, usermanage, productadd, home, update, updateuser, userinsert, loginuser, deletuser, logout } from '../Controller/controller.js'

// route.post('/login',insert)
// route.get('/data',find)
// route.delete('/remove/:id',del)
// route.put('/update/:id',update)

route.get('/', login)
route.get('/signup', signup)
route.post('/sign', register)
route.post('/login', loginuser)

route.use((req, res, next) => {
    console.log(req.session);
    
    if (req.session.user) {
        next()
    }
    else {
        res.send("you are not logged in")
    }
})

route.get('/update/', update)
route.get('/edit/:id', updateuser)
route.get('/home', home)
route.get('/dashboard', dash)
route.get('/logout', logout)
route.get('/manageuser', usermanage)
route.get('/addproduct', productadd)
route.post('/admin', userinsert)
route.get('/delete/:id', deletuser)

export default route
