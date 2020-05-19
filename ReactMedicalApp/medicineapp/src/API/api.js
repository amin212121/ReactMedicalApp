import * as axios from 'axios';
import React from "react";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {"API-KEY": '7a0f7a2e-98c8-4b1f-a9fb-e685c0cb91e3'}


});

export const UsersAPI = {
    getUsers(currentPage, PageSize) {
        return (instance.get(`/users?page=${currentPage}&count=${PageSize}`, {})).then(response => {
            return response.data
        })

    },

    Following(id) {
        return (instance.post(`/follow/${id}`, {})).then(response => {
            return response.data
        })
    },
    UnFollowing(id) {
        return (instance.delete(`/follow/${id}`, {})).then(response => {
            return response.data
        })
    }

};

export const ProfileAPI = {

    getUserStatus(UserId) {
        return instance.get(`/profile/status/${UserId ? UserId : '6705'}`).then(response => {
            return response.data
        })
    },
    UpdateUserStatus(message) {
        return instance.put(`/profile/status`, {status: message} )
    },
    getUserProfile(UserId) {
        return instance.get(`/profile/${UserId ? UserId : '6705'}`).then(response => {
            return response.data
        })
    }
};


export const CabinetAPI = {
    getPacients() {
        return axios.get(`/api/muggers`).then(response => {
            return response.data
        })
    },
    pushPacients(NewText) {
        axios.post(`/api/muggers`, {
            name: NewText,
            surname: "NONE"
        })
    }
};


export const authAPI = {
    Login(email, password, rememberMe= false) {
        return (instance.post(`/auth/login`, {
            email,
            password,
            rememberMe
        })).then(response => {
            return response.data
        })
    },

    Logout() {
        return (instance.delete(`/auth/login`, {}))
    }


};




