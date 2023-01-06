import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./view/Header";
import {AuthProvider} from "./auth/Auth";
import {RoleProvider} from "./auth/Role";
import {SearchProvider} from "./context/Search";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <RoleProvider>
                    <SearchProvider>
                        <Header/>
                    </SearchProvider>
                </RoleProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App;
