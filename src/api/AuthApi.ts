import {axiosCustomTokenOff} from "./AxiosConfig";
import {getToken} from "../util/TokenUtil";

const auth = axiosCustomTokenOff('http://localhost:8081/api/auth');

export const apiAuthWithPassword = (login: string, password: string) => auth.post("", "", {
    headers: {
        "Authorization": `Basic ${btoa(`${login}:${password}`)}`,
    }
})

export const apiTokenCheck = (token: string) => auth.get("/health", {
    headers: {
        "Authorization": `Bearer ${token}`,
    }
})