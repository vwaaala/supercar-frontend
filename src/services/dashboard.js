import {get_authorized_api} from "@/services/auth";

export const PATH = 'dashboard'


export async function get_stats() {
    console.log('working')
    return (await get_authorized_api()).get(`${PATH}/stats`)
}