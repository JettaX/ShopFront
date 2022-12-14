import {axiosCustom} from "./AxiosConfig";
import {getToken} from "../util/TokenUtil";

const users = axiosCustom('http://localhost:8081/api/users', getToken());

export function getUserId(): number {
    return 1;
}

export const getUsers = () => users.get('');