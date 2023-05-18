const express = require('express')
const cors = require('cors')
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
const salt = bcrypt.genSaltSync(10);
const User = require('./models/User')
const secret = 'hjaw3b2423h8fbadbo1b2'
const app = express();
const cookieParser = require('cookie-parser');
dotenv.config();
const port = process.env.PORT

app.use(cors())
app.use(express.json());
app.use(cookieParser())
app.listen(port, () => {
    connect()
    console.log('server listen:', port);
})

mongoose.set('strictQuery', false)
const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('MongoDB database connected')
    }
    catch(err){
        console.log('connection failed')
    }
}

//create a registration

app.post('/register', async (req, res) => {
    const {username,email,password} = req.body;
    
    try{
        const userDoc = await User.create({
            username,
            email,
            password:bcrypt.hashSync(password,salt)
        });
        res.json(userDoc)
    }
    catch(e){
        res.status(400).json(e);
    }
});

app.get('/login', async (req, res) => {    
    const {email, password} = req.body;
    const userDoc = await User.findOne({email});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    // res.json(passOk)
    if(passOk){
        jwt.sign({email,id:userDoc. id}, secret, {}, (err,token) => {
            if(err) throw err;
            res.cookie('token', token).json('ok')
            
        });
    }else{
        res.status(400).json('wrong credentials')
    }

});

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if(err) throw err;
        res.json(info);
    })
    
})
