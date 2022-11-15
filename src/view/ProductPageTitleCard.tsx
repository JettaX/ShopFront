import {Product} from "../interfaces";
import {ProductCard} from "./ProductPage";

export function ProductPageTitleCard(props: ProductCard) {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.product.image} className="img-fluid rounded-start"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.product.name}</h5>
                        <p className="card-text">Something features...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}