import express from 'express'

const route = express.Router()


import { login, signup, register, dash, usermanage, productadd, home, update, updateuser, userinsert, loginuser, deletuser,userenable,userdisable ,logout } from '../Controller/controller.js'


route.get('/', login)
route.get('/signup', signup)
route.post('/sign', register)
route.post('/login', loginuser)


route.use('/',(req, res, next) => {
    console.log(req.session);
    
    if (req.session.user) {
        next()
    }
    else {
        res.redirect('/')
     
    }
})
route.get('/home', home)
route.get('/update/:id', update)
route.post('/edit/:id', updateuser)

route.get('/dashboard', dash)
route.get('/logout', logout)
route.get('/manageuser', usermanage)
route.get('/addproduct', productadd)
route.post('/admin', userinsert)
route.get('/delete/:id', deletuser)
route.get('/status/:id/enable',userenable)
route.get('/status/:id/disable',userdisable)

export default route
