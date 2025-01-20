import axios from "axios";

export const authAxios = axios.create({
    baseURL:'https://pre-registration1.onrender.com'
})
// process.env.REACT_APP_API_URL