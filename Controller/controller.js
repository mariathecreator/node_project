import { user } from "../Model/model.js"
import { product } from "../Model/productmodel.js";

import bcrypt from "bcrypt"

const home = async (req, res) => {
    res.render('home')
}

const signup = async (req, res) => {
    res.render("signup")
}
const login = async (req, res) => {
    res.render("login")
}
const usermanage = async (req, res) => {
    res.render("manageuser")
}

const productadd = async (req, res) => {
    res.render("addproduct")
}

const update = async (req, res) => {
    try {
        const edit = await user.findById(req.params.id)
        res.render("userupdate", { user: edit })

    }
    catch (err) {
        console.log(err);

    }
}

const deletuser = async (req, res) => {
    const dat = req.params.id
    await user.findByIdAndDelete(dat)
    // res.redirect('/dashboard')
}

const dash = async (req, res) => {
    const dis = await user.find()
    const dos = await product.find()
    res.render("dashboard", { dis, dos })
}



const register = async (req, res) => {
    const { name, email, password } = req.body
    const hashed = await bcrypt.hash(password, 10)
    const insert = new user({
        name: name,
        email: email,
        password: hashed
    })
    await insert.save()
    res.redirect('/')
}

const userinsert = async (req, res) => {
    const { name, email, password } = req.body
    const hashedpsw = await bcrypt.hash(password, 10)
    const addu = new user({
        name: name,
        email: email,
        password: hashedpsw
    })
    await addu.save()
    res.redirect('/dashboard')
}


const updateuser = async (req, res) => {
    try {

        const { name, email, role } = req.body
        const updte = await user.findByIdAndUpdate(req.params.id, { name, email, role }, { new: true })
        res.redirect('/dashboard')

        console.log(req.body);
    }
    catch (err) {
        console.log(err);

    }
}

const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body);


        const check = await user.findOne({ email: email })

        console.log(check);

        if (!check) {
            return res.redirect('/')
        }
        const see = await bcrypt.compare(password, check.password)
        if (!see) {
            return res.send('incorrect password')
        }
        if(check.status==false){
            return res.send("your  account is been disabled by the admin ")
        }
        if (check.role == false) {
            //await user.findByIdAndUpdate(check._id,{lastlogin:Date.now})
            //return res.send("only admin can access the dashboard")
            req.session.user = check
            await user.findByIdAndUpdate(check._id,{lastlogin:new Date()})

            return  res.redirect('/home')
        }
        req.session.user = check
         await user.findByIdAndUpdate(check._id,{lastlogin:new Date()})
        res.redirect("/dashboard")
    }
    catch (err) {
        console.log(err)
    }
}

export const logout = async(req, res) => {
    if(req.session.user){
         await user.findByIdAndUpdate(req.session.user._id,{lastlogout:new Date()})
    }
    req.session.destroy(() => {
        res.redirect('/');
    })
}


export const userenable=async(req,res)=>{
    await user.findByIdAndUpdate(req.params.id,{status:true})
    res.redirect("/dashboard")
}
export const userdisable=async(req,res)=>{
    await user.findByIdAndUpdate(req.params.id,{status:false})
    res.redirect("/dashboard")
}
export { login, signup, dash, productadd, home, usermanage, update }
export { register, userinsert, loginuser, updateuser, deletuser }

