import {axiosCustom} from "./AxiosConfig";

const users = axiosCustom('http://localhost:8081/api/users');

export function getUserId(): number {
    return 1;
}