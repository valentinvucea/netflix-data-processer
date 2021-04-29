import { getErrorMessage} from "../../helpers/handle.errors";

export default {
    methods: {
        $getErrorMessage (error) {
            return getErrorMessage(error);
        }
    }
};