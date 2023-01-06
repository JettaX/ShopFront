import {axiosCustom} from "./AxiosConfig";
import {getToken} from "../util/TokenUtil";

const users = axiosCustom('http://localhost:8083/auth/api/users', getToken());

export function apiGetUserId(): number {
    return 1;
}

export const apiGetUsers = () => users.get('');