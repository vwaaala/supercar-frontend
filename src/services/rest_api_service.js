import axios from "axios";

export const HOST = process.env.VUE_APP_BACKEND_API_HOST

export function get_image_url(image_name) {
    return `${HOST}/images/image_data/${image_name}`
}


export const public_api = axios.create({
    baseURL: HOST,
    timeout: 1000,
});
