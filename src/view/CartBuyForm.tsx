import {Cart} from "../interfaces";

interface CartBuyFormProps {
    cart: Cart,
}

export function CartBuyForm(props: CartBuyFormProps) {
    function getTotalPrice() {
        if (props.cart.products.length < 1) {
            return 0;
        }
        return props.cart.products
            .map(product => product.product.price * product.quantity)
            .reduce((previousValue: number, currentValue: number) =>
                previousValue + currentValue).valueOf();
    }

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