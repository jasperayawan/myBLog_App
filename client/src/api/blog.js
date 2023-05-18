import Axios from "axios"

const blog = Axios.create({
    baseURL: "http://localhost:4000"
})

const registerUser = async (data) => {
    try{
        const response = await blog.post('/register',data)
        return response.data;
    }
    catch(error){
        console.log(error)
    }
}

export {
    registerUser
}