import axios from 'axios'

import axiosAuth from "../../axios/axiosAuth";

export const getWithAuth = (url,params) => {
    let options = {
        method: 'GET',
        url,
    };

    if(params) options.params = params

    return axiosAuth(options)
}

export const postWithAuth = (url,data) => {
    let options = { 
        method:'POST',
        url,
        data, 
    };

    return axiosAuth(options)
}

export const putWithAuth = (url,data) => {
    let options = { 
        method:'PUT',
        url,
        data, 
    };

    return axiosAuth(options)
}

export const removeWithAuth = (url) => {
    let options = { 
        method:'DELETE',
        url,
    };

    return axiosAuth(options)
}

export const get = (url,params) => {
    let options = {
        method: 'GET',
        url,
        headers:  {
            "Content-Type": "application/json",
        }
    };

    if(params) options.params = params

    return axios(options)
}

export const post = (url,data) => {
    let options = {
        method: 'POST',
        url,
        data,
        headers:  {
            "Content-Type": "application/json",
        }
    };
    console.log(options)

    return axios(options)
}

export const put = (url,data) => {
    let options = { 
        method:'PUT',
        url,
        data,
        headers:  {
            "Content-Type": "application/json",
        } 
    };


    return axiosAuth(options)
}

export const remove = (url) => {
    let options = { 
        method:'DELETE',
        url,
        headers:  {
            "Content-Type": "application/json",
        }
    };

    return axiosAuth(options)
}