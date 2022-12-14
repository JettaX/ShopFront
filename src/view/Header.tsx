import {Link, Route, Routes} from "react-router-dom";
import {Catalog} from "./Catalog";
import {Home} from "./Home";
import {Cart} from "./Cart";
import {Profile} from "./Profile";
import {ProductCreator} from "./ProductCreator";
import {ProductPage} from "./ProductPage";

import {Orders} from "./Orders";
import {Login} from "./Login";
import {AuthProvider, RequireAuth, useAuth} from "../util/Auth";
import {Logout} from "./Logout";
import {FunctionMenu} from "./FunctionMenu";
import {FunctionMenuAllUsers} from "./FunctionMenuAllUsers";
import {FunctionMenuProductChanger} from "./FunctionMenuProductChanger";
import {FunctionMenuProductChangerForm} from "./FunctionMenuProductChangerForm";

export function Header() {
    let auth = useAuth();

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light mb-3">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/home">
                                Home
                            </Link>
                            <Link className="nav-link" to="/catalog">
                                Catalog
                            </Link>
                            <Link className="nav-link" to="/function/menu">
                                function
                            </Link>
                        </div>
                    </div>
                    <form className="container" role="search">
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </div>
                    </form>
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/cart">
                            Cart
                        </Link>
                        <Link className="nav-link" to="/profile">
                            Profile
                        </Link>
                        <Link className="nav-link" to={!auth.isAuth ? "/login" : "/logout"}>
                            {!auth.isAuth ? "Login" : "Logout" }
                        </Link>
                    </div>
                </div>
            </nav>

                <Routes>
                    <Route>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Route>
                    <Route>
                        <Route path="/logout" element={<RequireAuth><Logout/></RequireAuth>}/>
                        <Route path="/catalog" element={<RequireAuth><Catalog/></RequireAuth>}/>
                        <Route path="/function/menu" element={<RequireAuth><FunctionMenu/></RequireAuth>}/>
                        <Route path="/function/menu/addProduct" element={<RequireAuth><ProductCreator/></RequireAuth>}/>
                        <Route path="/function/menu/productChanger" element={<RequireAuth><FunctionMenuProductChanger/></RequireAuth>}/>
                        <Route path="/function/menu/productChanger/:id" element={<RequireAuth><FunctionMenuProductChangerForm/></RequireAuth>}/>
                        <Route path="/function/menu/allUsers" element={<RequireAuth><FunctionMenuAllUsers/></RequireAuth>}/>
                        <Route path="/cart" element={<RequireAuth><Cart/></RequireAuth>}/>
                        <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
                        <Route path="/product/:name/:id" element={<RequireAuth><ProductPage/></RequireAuth>}/>
                        <Route path="/profile/orders" element={<RequireAuth><Orders/></RequireAuth>}/>
                    </Route>
                </Routes>
        </div>
    )
}