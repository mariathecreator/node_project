import { adduser } from "../Model/adminuser.js"
import { user } from "../Model/model.js"


const home = async (req, res) => {
        return res.render('home')
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
    res.render("userupdate")

}

const deletuser = async (req, res) => {
    const dat = req.params.id
    await user.findByIdAndDelete(dat)
    res.redirect('/dashboard')
}

const dash = async (req, res) => {
    const dis = await user.find()
    res.render("dashboard", { dis })
}

export const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    })
}




const register = async (req, res) => {
    const insi = await user.insertOne(req.body);
    res.redirect('/')
}
const userinsert = async (req, res) => {
    const addu = await user.insertOne(req.body)
    res.redirect('/dashboard')
}

const updateuser = async (req, res) => {
    const id = req.params.id
    const updte = await user.updateOne({ _id: id }, { $set: req.body })
    console.log(updte);

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
        if (check.password !== password) {
            return res.send('incorrect password')
        }
        if (check.role == false) {
            res.send("bfhdg")
            //res.redirect('/home')
        }
        req.session.user = check
        res.redirect("/dashboard")

    }
    catch (err) {
        res.send("hiiiii")
    }
    //const session=await db.collection('userSession').insertOne(req.body)

}



export { login, signup, dash, productadd, home, usermanage, update }
export { register, userinsert, loginuser, updateuser, deletuser }

