import * as axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";
const instance = axios.create({

    baseUrl: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5){
        return axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    getProfile(userId){
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId);

    }

}

export const authAPI = {
    me(){
       return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
    }
}


