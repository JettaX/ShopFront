import {Order, Product} from "../interfaces";
import {OrderCard} from "./OrderCard";

export interface OrderProps {
    order: Order;
}

export function OrderTab(props: OrderProps) {
    return (
        <div className="card mb-3">
            <div className="card-header">
                Order #{props.order.id}
            </div>
            <ul className="list-group list-group-flush">
                {props.order.products.map(product => <OrderCard product={product}/>)}
            </ul>
        </div>
    )
}