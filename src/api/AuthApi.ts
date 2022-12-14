import {axiosCustomTokenOff} from "./AxiosConfig";

const auth = axiosCustomTokenOff('http://localhost:8081/api/auth');

export const authWithPassword = (login: string, password: string) => auth.post("", "", {
    headers: {
        "Authorization": `Basic ${btoa(`${login}:${password}`)}`,
    }
})