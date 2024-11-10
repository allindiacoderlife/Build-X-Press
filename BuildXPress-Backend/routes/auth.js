const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Admin = require('../models/admin')

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/register', async (req, res) => {
    const { name, phone, email, password } = req.body;
    const oldUser = await User.findOne({ email: req.body.email });
    const oldPhone = await User.findOne({ phone: req.body.phone });
    if (oldPhone) {
        return res.send({ status: "error", data: "Phone number already exists" });
    }
    if (oldUser) {
        return res.send({ status: "error", data: "User already exists" });
    }
    const encyptedPassword = await bcrypt.hash(password, 10);
    try {
        await User.create({
            name: name,
            phone: phone,
            email: email,
            password: encyptedPassword,
        });
        res.send({ status: "Ok", data: "User created" });
        console.log("User created");
    } catch (err) {
        res.send({ status: "error", data: err });
        console.log(err);
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const oldUser = await User.findOne({email: req.body.email});
    if(!oldUser) {
        return res.send({status: "errer" , data:"User Does Not Exist"})
    }


    if (await bcrypt.compare(password, oldUser.password)) {
        const token = jwt.sign({ email: oldUser.email }, JWT_SECRET);
        if (res.status(201)) {
            return res.send({ status: "Ok", data: "Success", token: token });
        } else {
            return res.send({ status: "error", data: "Invalid password" });
        }
    } else {
        return res.send({ status: "error", data: "Invalid password" });
    }
})

module.exports = router
