import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        // "API-KEY": process.env.REACT_APP_API_KEY,
        "API-KEY": "8232888a-a5b4-4679-9138-ff659b59755d",

    }

})



export const usersAPI = {


    async requestUsers(currentPage = 1, pageSize = 10) {
        const response = await instance.get(
            `users?page=${currentPage}&count=${pageSize}`)
        return response.data
    },

    async follow(id) {
        const response = await instance.post(`follow/${id}`);
        return response.data;
    },

    async unfollow(id) {
        const response = await instance.delete(`follow/${id}`)
        return response.data
    }

    ,
    getProfile(id) {
        console.warn('Obsolete method. Please use ProfileAPI')
        return profileAPI.getProfile(id)
    },
}

export const profileAPI = {

    getProfile(id) {

        return instance.get(`profile/${id}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        })
    },
    savePhoto(photoFile) {

        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}


export const authAPI = {

    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    },

}

