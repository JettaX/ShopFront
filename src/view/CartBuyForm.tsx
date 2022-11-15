import {getCart} from "../cart/CartUtil";

export function CartBuyForm() {
    return (
        <div className="card text-center" style={{width: "10rem;"}}>
            <div className="card-body">
                <h5 className="card-title">Total price</h5>
                <p className="card-text">{getTotalPrice()}</p>
                <a href="#" className="btn btn-success">Buy</a>
            </div>
        </div>
    );
}

function getTotalPrice () {
    const cart = getCart();
    if (cart.length < 1) {
        return 0;
    }
    return getCart().map(product => product.price).reduce((previousValue: number, currentValue: number) => previousValue + currentValue).valueOf();
}