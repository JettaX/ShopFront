import {BoughtProduct, Order, Product} from "../interfaces";

export interface OrderCardProps {
    product: BoughtProduct;
}

export function OrderCard(props: OrderCardProps) {
    return (
        <li className="list-group-item">
            <div className="card">
                <div className="row">
                    <div className="col-md-1 col-lg-2 col-sm-auto">
                        <img src={props.product.product.image} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.product.product.name}</h5>
                            <b className="card-text">{props.product.price}</b>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}