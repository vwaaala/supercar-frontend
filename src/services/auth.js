import axios from "axios";
import {HOST, public_api} from "@/services/rest_api_service";
import jwt_decode from 'jwt-decode';

export function logout() {
    localStorage.clear();
    window.location = '/';
}


export function authenticate_before_entry(next) {
    try {
        getAccessToken()
    } catch (e) {
        window.location.pathname = 'login'
    }
    next()
}

export async function get_authorized_api() {
    try {
        getAccessToken()
    } catch (error) {
        window.location.pathname = 'login'
    }

    return axios.create({
        baseURL: HOST,
        timeout: 1000,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
            'Access-Control-Allow-Origin': '*'
        }
    });
}

export function saveAccessToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
}


export function getAccessToken() {
    console.log('Retrieving access token....');
    let token = JSON.parse(localStorage.getItem('token'));
    // noinspection JSUnresolvedVariable
    if (!token || !token.access_token) {
        throw "no access token found!"

    }
    // noinspection JSUnresolvedVariable
    return token.access_token
}

export function getLoggedInData() {
    try {
        return jwt_decode(getAccessToken())
    } catch (e) {
        window.location = '/login'
    }
}

export async function login(username, password) {
    let from_data = new FormData();
    from_data.append('username', username);
    from_data.append('password', password);
    from_data.append('grant_type', 'password');

    return new Promise((resolve, reject) => {
        public_api.post('auth/token', from_data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            console.log('login data', response)
            if (response.status === 200) {
                saveAccessToken(response.data)
                resolve(response.data)
            } else {
                reject(response)
            }
        }).catch(error => reject(error))
    })
}

export async function create_account(name, email, password) {
    return new Promise((resolve, reject) => {
        public_api.post('users', {
            name: name,
            username: email,
            password: password
        }).then(response => {
            resolve(response.data)
        }).catch(error => reject(error))
    })
}


export async function get_current_user() {
    return (await get_authorized_api()).get('/auth/me')
}