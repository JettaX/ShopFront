import {deleteToken, isTokenExist, setToken} from "../util/TokenUtil";
import {deleteUser, getUser, setUser} from "../util/UserUtil";
import {apiAuthWithPassword} from "../api/AuthApi";
import {AxiosResponse} from "axios";
import {Credentials} from "../interfaces";


export const AuthPasswordProvider = {
    isAuthenticated: isTokenExist(),
    user: getUser(),
    signin(login: string, password: string, callback: VoidFunction) {
        apiAuthWithPassword(login, password).then((cred: AxiosResponse<Credentials>) => {
            if (cred.status === 200) {
                console.log("Login successful");
                setToken(cred.data.token);
                setUser(cred.data.user);
                AuthPasswordProvider.isAuthenticated = true;
                callback();
            }
        })
    },
    signout(callback: VoidFunction) {
        deleteToken();
        deleteUser();
        AuthPasswordProvider.isAuthenticated = false;
        callback();
    },
};