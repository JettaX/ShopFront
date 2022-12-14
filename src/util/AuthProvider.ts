import {authWithPassword} from "../api/AuthApi";
import {deleteToken, isTokenExist, setToken} from "./TokenUtil";

export const AuthPasswordProvider = {
    isAuthenticated: isTokenExist(),
    signin(login: string, password: string, callback: VoidFunction) {
        authWithPassword(login, password).then(r => {
            if (r.status === 200) {
                console.log("Login successful " + r.data);
                setToken(r.data);
                AuthPasswordProvider.isAuthenticated = true;
                callback();
            }
        })
    },
    signout(callback: VoidFunction) {
        deleteToken()
        AuthPasswordProvider.isAuthenticated = false;
        callback();
    },
};