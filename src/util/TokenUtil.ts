import {apiTokenCheck} from "../api/AuthApi";
import {AxiosPromise, AxiosResponse} from "axios";

export function getToken(): string {
    let token = localStorage.getItem('token');
    if (token !== null) {
        return token;
    }
    return '';
}

export function setToken(token: string): void {
    localStorage.setItem('token', token);
}

export function deleteToken(): void {
    localStorage.removeItem('token');
}

export function isTokenExist(): boolean {
    return getToken() !== '';
}

export function isTokenValid(): AxiosPromise {
    return apiTokenCheck(getToken());
}