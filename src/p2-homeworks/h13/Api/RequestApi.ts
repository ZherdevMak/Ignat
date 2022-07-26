import axios from "axios";

export const requestAPI = {


    request(success:boolean) {
        return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success})
    }
}