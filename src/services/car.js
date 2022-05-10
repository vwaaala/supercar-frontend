import {public_api} from "@/services/rest_api_service";
import {getLoggedInData} from "@/services/auth";

// export const PATH = 'cars'

export class CarService {
    api_path = 'cars'
    item_type = 'car'

    get_item(id) {
        return public_api.get(`${this.api_path}/${id}`)
    }

    get_fields() {
        return public_api.get(`${this.api_path}/fields`)
    }
    get_master_data() {
        return public_api.get(`${this.api_path}/get_master_Data`)
    }

    create(object, image) {
        object.archived = false
        object.user = getLoggedInData().username

        let form_data = new FormData()
        form_data.append('data', JSON.stringify(object))

        if (image) form_data.append('image', image)

        return public_api.post(this.api_path, form_data)
    }

    update(object, image) {
        let form_data = new FormData()
        form_data.append('data', JSON.stringify(object))

        if (image) form_data.append('image', image)

        let item_id = object.id
        return public_api.put(`${this.api_path}/${item_id}`, form_data)
    }

    add_image(item_id, image) {
        let form_data = new FormData()
        form_data.append('image', image)

        return public_api.post(`${this.api_path}/${item_id}/images`, form_data)
    }

    get_items(query_params) {
        if (query_params) {
            query_params.archived = false;
        } else {
            query_params = {archived: false}
        }
        return public_api.get(`${this.api_path}`, {params: query_params})
    }

    get_all_items(query_params) {
        if(!query_params)
        {
            query_params = {}
        }

        let user = getLoggedInData()
        if (user.type !== 'admin') {
            query_params.user = user.username
        }
        console.log(query_params)

        return public_api.get(`${this.api_path}`, {params: query_params})
    }

    get_categories() {
        return public_api.get(`${this.api_path}/categories`)
    }

    get_filters(query_params = null) {
        return public_api.get(`${this.api_path}/filters`, {params: query_params})
    }

    archive(item_id) {
        return public_api.delete(`${this.api_path}/${item_id}`)
    }

}

const service = new CarService()
export default service
