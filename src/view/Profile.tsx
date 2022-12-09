import {Link} from "react-router-dom";

export function Profile() {
    return (
        <ul className="list-group list-group-flush">
            <Link to="/profile/orders" className="list-group-item">Orders</Link>
        </ul>
    )
}