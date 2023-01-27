import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import {getUser} from "../util/UserUtil";
import {User} from "../interfaces";
import {AuthPasswordProvider} from "./AuthProvider";
import {getGuestId, setGuestId} from "../util/GuestUtil";
import {v4 as uuidv4} from 'uuid';

export interface AuthContextType {
    user: User;
    isAuth: boolean;
    signin: (user: string, password: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}


let AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({children}: { children: React.ReactNode }) {
    let [user, setUser] = React.useState<any>(AuthPasswordProvider.user);
    let [isAuth, setIsAuth] = React.useState<any>(AuthPasswordProvider.isAuthenticated);

    React.useEffect(() => {
        console.log("Auth Provider");
        if (!isAuth && getGuestId() === null) {
            setGuestId(uuidv4());
        }
    });

    let signin = (user: string, password: string, callback: VoidFunction) => {
        return AuthPasswordProvider.signin(user, password, () => {
            setUser(getUser());
            setIsAuth(true);
            callback();
        });
    };

    let signout = (callback: VoidFunction) => {
        return AuthPasswordProvider.signout(() => {
            setUser(null);
            setIsAuth(false);
            callback();
        });
    };

    let value = {user, isAuth, signin, signout};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return React.useContext(AuthContext);
}

export function RequireAuth({children}: { children: JSX.Element }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.isAuth || auth.user === null) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return children;
}