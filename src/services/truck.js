import {CarService} from "@/services/car";


class TruckService extends CarService {
    api_path = 'trucks'
    item_type = 'truck'

}

const service = new TruckService()
export default service