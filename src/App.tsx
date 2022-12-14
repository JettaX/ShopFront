import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./view/Header";
import {AuthProvider} from "./util/Auth";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Header/>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App;
