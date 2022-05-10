import {public_api} from "@/services/rest_api_service";

export class WishListService {
    api_path = 'wishlist'

    get_items(user_id) {
        return public_api.get(`${this.api_path}/${user_id}`)
    }

    add_item_to_wishlist(user_id, item_id, item_type) {
        let req_obj = {
            user_id: user_id,
            item_id: item_id,
            item_type: item_type
        }

        console.log(req_obj)
        return public_api.post(this.api_path, req_obj)
    }

    delete_item(wishlist_item_id) {
        return public_api.delete(`${this.api_path}/${wishlist_item_id}`)
    }
}

const service = new WishListService()
export default service
