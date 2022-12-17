import {BoughtProduct} from "../interfaces";

export interface OrderCardProps {
    product: BoughtProduct;
}

export function OrderCard(props: OrderCardProps) {
    return (
        <li className="list-group-item">
            <div className="card">
                <div className="row">
                    <div className="col-md-1 col-lg-2 col-sm-auto">
                        <img src={props.product.image}
                             className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body row">
                            <h5 className="card-title">{props.product.name}</h5>
                            <b className="card-text">{props.product.price} rub</b>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}