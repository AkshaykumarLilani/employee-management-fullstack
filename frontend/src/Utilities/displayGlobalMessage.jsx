import { toast } from "react-toastify"


export const notify = (message="", type="info") => {
    switch(type){
        case "success": {
            toast.success(message);
            break;
        }
        case "error": {
            toast.error(message);
            break;
        }
        case "warning": {
            toast.warning(message);
            break;
        }
        case "infor": {
            toast.info(message);
            break;
        }
        default: {
            toast.info(message);
        }
    }
}