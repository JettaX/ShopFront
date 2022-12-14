import {Link} from "react-router-dom";

export function FunctionMenu() {
    return (
        <div className="list-group">
            <Link className="list-group-item list-group-item-action" to="/function/menu/addProduct">
                Create a new product
            </Link>
            <Link className="list-group-item list-group-item-action" to="/function/menu/allUsers">
                get all users
            </Link>
            <Link className="list-group-item list-group-item-action" to="/function/menu/productChanger">
                product redactor
            </Link>
        </div>
    )
}