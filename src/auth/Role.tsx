import React from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "./Auth";
import {ADMIN} from "./Roles";

export interface RoleContextType {
    isAdmin: boolean,
}

let RoleContext = React.createContext<RoleContextType>(null!);

export function RoleProvider({children}: { children: React.ReactNode }) {
    let isAdmin = false;
    let auth = useAuth();

    if (auth.user !== null) {
        auth.user.roles.forEach(role => {
            console.log("render")
            if (role.name === ADMIN) {
                isAdmin = true;
            }
        })
    } else {
        isAdmin = false;
    }
    let value = {isAdmin};

    return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

export function useRole() {
    return React.useContext(RoleContext);
}

export function RequireRoleADMIN({children}: { children: JSX.Element }) {
    let role = useRole();

    if (!role.isAdmin) {
        return <Navigate to={"/home"} replace/>;
    }

    return children;
}