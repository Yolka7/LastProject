import axios from "axios";
import Cookies from "js-cookie"

const API_HOST = 'http://localhost:3002'

export const handleSignup = async (username: string, password: string, firstName: string, lastName: string, repeatpassword: string) => {
    await axios.post(`${API_HOST}/register`, { username, password, firstName, lastName, repeatpassword, department: "HR" })
        .then(res => Cookies.set('token', 'Bearer ' + res.data.token))
}

export const handleLogin = async (username: string, password: string) => {
    await axios.post(`${API_HOST}/login`, { username, password })
        .then(res => Cookies.set('token', 'Bearer ' + res.data.token))
}

export async function getUserInfo() {
    return await axios.get(`${API_HOST}/user/info`, {
        headers: {
            Authorization: Cookies.get('token')
        }
    })
}

export const handlePostApplication = async (title: string, text: string) => {
    await axios.post(`${API_HOST}/submit-application`, { title: title, text: text }, {
        headers: {
            Authorization: Cookies.get('token')
        }
    })
}

export async function getApplications() {
    return await axios.get(`${API_HOST}/view-applications`, {
        headers: {
            Authorization: Cookies.get('token')
        }
    })
}

