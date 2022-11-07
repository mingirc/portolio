import axios from "axios";

const instance = axios.create({
    baseURL:"https://cemalmingir.com/cmbackend/",
    headers:{
        "Content-Type":"application/json"
    }
})

export default instance;