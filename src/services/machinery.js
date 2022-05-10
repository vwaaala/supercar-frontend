import {CarService} from "@/services/car";

class MachineryService extends CarService {
    api_path = 'machinery'
    item_type = 'machinery'
}

const service = new MachineryService()
export default service