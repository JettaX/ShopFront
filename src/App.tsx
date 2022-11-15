import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./view/Header";

function App() {
    return (
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    )
}

export default App;
