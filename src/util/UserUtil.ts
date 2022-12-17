import {User} from "../interfaces";

export function getUser(): User | null {
    let user = localStorage.getItem('user');
    if (user !== null) {
        return JSON.parse(user);
    }
    return null;
}

export function setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
}

export function deleteUser(): void {
    localStorage.removeItem('user');
}