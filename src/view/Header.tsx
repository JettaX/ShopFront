import {Link, Route, Routes} from "react-router-dom";
import {Catalog} from "./Catalog";
import {Home} from "./Home";
import {Cart} from "./Cart";
import {Profile} from "./Profile";
import {ProductCreator} from "./ProductCreator";
import {ProductPage} from "./ProductPage";

import {Orders} from "./Orders";

export function Header() {
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
                            <Link className="nav-link" to="/addProduct">
                                Creator
                            </Link>
                        </div>
                    </div>
                    <form className="container-fluid" role="search">
                        <div className="input-group">
                            <input className="form-control me-2" type="search" placeholder="Search"
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
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/addProduct" element={<ProductCreator/>}/>
                <Route path="/product/:name/:id" element={<ProductPage/>}/>
                <Route path="/profile/orders" element={<Orders/>}/>
            </Routes>
        </div>
    )
}