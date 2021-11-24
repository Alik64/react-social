import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "6be562ec-a00d-4f86-84ca-4bf41f9245b1",
        'Content-Type': 'multipart/form-data'
    }

})



export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(
            `follow/${id}`).then(response => response.data)
    },
    getProfile(id) {
        console.warn('Obsolete method. Please use ProfileAPI')
        return profileAPI.getProfile(id)
    },
    putPhoto(formData) {
        return instance.post('https://social-network.samuraijs.com/api/1.0/profile/photo', formData)
    }
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
    }
}


export const authAPI = {

    me() {
        return instance.get(`auth/me`)
    }
}

