import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '924cd5cc-0873-4cd3-85ca-0ff4cac83fa5'
    }
})


export const usersAPI = {
    getUsers(pageSize, page) {
        return instance.get(`users?count=${pageSize}&page=${page}`)
            .then(response => response.data)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    auth(){
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}