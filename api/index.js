const express = require('express')
const cors = require('cors')
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
const salt = bcrypt.genSaltSync(10);
const User = require('./models/User')
const Post = require('./models/Post')
const secret = 'hjaw3b2423h8fbadbo1b2'
const app = express();
const cookieParser = require('cookie-parser');
const multer = require('multer')
//File System
const fs = require('fs')

//upload middleware

const uploadMiddleware = multer({ dest: 'uploads/' });

dotenv.config();

const port = process.env.PORT || 4000;

app.use('/uploads', express.static(__dirname + '/uploads')); //__dirname currently running at /uploads
app.use(cors({credentials:true,origin:'http://localhost:5173'}))
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

app.post('/login', async (req, res) => {    
    const {email, password} = req.body;
    const userDoc = await User.findOne({email});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    // res.json(passOk)
    if(passOk){
        jwt.sign({email,id:userDoc. id}, secret, {}, (err,token) => {
            if(err) throw err;
            res.cookie('token', token).json({
                id:userDoc._id,
                email,
            })
            
        });
    }else{
        res.status(400).json('wrong credentials')
    }

});

app.post('/logout', (req, res) => {
    res.cookie('token','').json('ok');
})

app.post('/post', uploadMiddleware.single('file'), async (req,res) => {
    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const extension = parts[parts.length - 1];
    const newPath = path+'.'+extension;
    fs.renameSync(path, newPath);

    
    const {token} = req.cookies;

        //after verified the token we get an info

        jwt.verify(token, secret, {}, async (err, info) => {
        if(err) throw err;
        const {title,summary,content} = req.body;
        const postDoc =  await Post.create({
        title,
        summary,
        content,
        cover: newPath,
        //inside the info we h ave the id
        author: info.id,
    })
        res.json(postDoc);
    })

    

});

app.put('/post', uploadMiddleware.single('file'), (req, res) => {
    let newPath = null;
    if(req.file){
        const {originalname,path} = req.file;
        const parts = originalname.split('.');
        const extension = parts[parts.length - 1];
        newPath = path+'.'+extension;
        fs.renameSync(path, newPath);
    }

    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if(err) throw err;
        const {id,title,summary,content} = req.body;
        const postDoc = await Post.findById(id)
        const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
        res.json({isAuthor,postDoc,info});
    //     const postDoc =  await Post.create({
    //     title,
    //     summary,
    //     content,
    //     cover: newPath,
    //     //inside the info we h ave the id
    //     author: info.id,
    // })
        res.json(postDoc);
    })
})

app.get('/post', async (req,res) => {
    
    res.json(await Post.find().populate('author',['username','email'])
        .sort({createdAt: -1})
        .limit(20)
    );     
})

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if(err) throw err;
        res.json(info);
    }); 
});

app.get('/post/:id', async(req,res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author',['username','email']);
    res.json(postDoc)
})
