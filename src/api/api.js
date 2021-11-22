import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "6be562ec-a00d-4f86-84ca-4bf41f9245b1"
    }

})



export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    async follow(id) {
        const response = await instance.post(
            `follow/${id}`)
        return response.data
    },
    async unfollow(id) {
        const response = await instance.delete(
            `follow/${id}`);
        return response.data;
    },
    getProfile(id) {
        return instance.get(`profile/${id}`)

    }


}
export const authAPI = {

    async authMe() {
        const response = await instance.get(`auth/me`)
        return response.data
    }

    // authMe() {
    //     return instance.get(`auth/me`).then(response => response.data)
    // }
}

