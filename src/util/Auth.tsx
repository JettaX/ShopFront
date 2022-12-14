import React from "react";
import {AuthPasswordProvider} from "./AuthProvider";
import {Navigate, useLocation} from "react-router-dom";

export interface AuthContextType {
    user: any;
    isAuth: boolean;
    signin: (user: string, password: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}


let AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({children}: { children: React.ReactNode }) {
    let [user, setUser] = React.useState<any>(null);
    let [isAuth, setIsAuth] = React.useState<any>(AuthPasswordProvider.isAuthenticated);

    let signin = (user: string, password: string, callback: VoidFunction) => {
        return AuthPasswordProvider.signin(user, password, () => {
            setUser(user);
            setIsAuth(AuthPasswordProvider.isAuthenticated);
            callback();
        });
    };

    let signout = (callback: VoidFunction) => {
        return AuthPasswordProvider.signout(() => {
            setUser(null);
            setIsAuth(AuthPasswordProvider.isAuthenticated);
            callback();
        });
    };

    let value = {user, isAuth, signin, signout};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return React.useContext(AuthContext);
}

export function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useAuth();
    let location = useLocation();

    /*if (!auth.isAuth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }*/

    return children;
}