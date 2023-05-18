import Axios from "axios"

const blog = Axios.create({
    baseURL: "http://localhost:4000",
    headers: {'Content-Type':'application/json'},
})

const registerUser = async (data) => {
    try{
        console.log(data)
        const response = await blog.post('/register',data)
        return response.data;
    }
    catch(error){
        console.log(error)
    }
}

const loginUser = async (data) => {
    try{
        console.log(data)
        const response = await blog.post('/login',data)
        return response.data;
    }
    catch(error){
        console.log(error)
    }
}

export {
    loginUser,
    registerUser
}