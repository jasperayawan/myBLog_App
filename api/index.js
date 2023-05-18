const express = require('express')
const cors = require('cors')
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const app = express();
const salt = bcrypt.genSaltSync(10);
const secret = 'hjaw3b2423h8fbadbo1b2'

app.use(cors())
app.use(express.json());

dotenv.config();
const port = process.env.PORT || 4000

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

app.get('/test', (req, res) => {
    res.json('text ok2');
})


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
