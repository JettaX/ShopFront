import {Link, Route, Routes} from "react-router-dom";
import {Catalog} from "./Catalog";
import {Home} from "./Home";
import {Cart} from "./Cart";
import {Profile} from "./Profile";
import {ProductCreator} from "./ProductCreator";
import {ProductPage} from "./ProductPage";

import {Orders} from "./Orders";
import {Login} from "./Login";
import {RequireAuth, useAuth} from "../auth/Auth";
import {Logout} from "./Logout";
import {FunctionMenu} from "./FunctionMenu";
import {FunctionMenuAllUsers} from "./FunctionMenuAllUsers";
import {FunctionMenuProductChanger} from "./FunctionMenuProductChanger";
import {FunctionMenuProductChangerForm} from "./FunctionMenuProductChangerForm";
import {RequireRoleADMIN, useRole} from "../auth/Role";
import {HeaderLinkProfile} from "./HeaderLinkProfile";
import {HeaderLinkCart} from "./HeaderLinkCart";
import {HeaderLinkAuth} from "./HeaderLinkAuth";
import {SearchTab} from "./SearchTab";

export function Header() {
    let auth = useAuth();
    let role = useRole();

    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light mb-3">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/home">
                                Home
                            </Link>
                            <Link className="nav-link" to="/catalog">
                                Catalog
                            </Link>
                            <Link className="nav-link" hidden={!role.isAdmin} to="/function/menu">
                                function
                            </Link>
                        </div>
                    </div>
                    <SearchTab/>
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/cart">
                            <HeaderLinkCart/>
                        </Link>
                        <Link className="nav-link" to="/profile">
                            <HeaderLinkProfile/>
                        </Link>
                        <Link className="nav-link" to={!auth.isAuth ? "/login" : "/logout"}>
                            <HeaderLinkAuth/>
                        </Link>
                    </div>
                </div>
            </nav>

            <Routes>

                {/*public rotes*/}
                <Route>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Route>

                {/*auth and has any private roles rotes*/}
                <Route>
                    <Route path="/function/menu" element={
                        <RequireAuth>
                            <RequireRoleADMIN>
                                <FunctionMenu/>
                            </RequireRoleADMIN>
                        </RequireAuth>
                    }/>
                    <Route path="/function/menu/addProduct" element={
                        <RequireAuth>
                            <RequireRoleADMIN>
                                <ProductCreator/>
                            </RequireRoleADMIN>
                        </RequireAuth>}/>
                    <Route path="/function/menu/productChanger" element={
                        <RequireAuth>
                            <RequireRoleADMIN>
                                <FunctionMenuProductChanger/>
                            </RequireRoleADMIN>
                        </RequireAuth>}/>
                    <Route path="/function/menu/productChanger/:id" element={
                        <RequireAuth>
                            <RequireRoleADMIN>
                                <FunctionMenuProductChangerForm/>
                            </RequireRoleADMIN>
                        </RequireAuth>}/>
                    <Route path="/function/menu/allUsers" element={
                        <RequireAuth>
                            <RequireRoleADMIN>
                                <FunctionMenuAllUsers/>
                            </RequireRoleADMIN>
                        </RequireAuth>}/>
                </Route>

                {/*auth rotes*/}
                <Route>
                    <Route path="/logout" element={<RequireAuth><Logout/></RequireAuth>}/>
                    <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
                    <Route path="/product/:name/:id" element={<ProductPage/>}/>
                    <Route path="/profile/orders" element={<RequireAuth><Orders/></RequireAuth>}/>
                </Route>
            </Routes>
        </div>
    )
}