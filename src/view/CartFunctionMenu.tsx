import {apiClearCart} from "../api/CartApi";

interface CartFunctionMenuProps {
    onClearCart: () => void;
}

export function CartFunctionMenu(props: CartFunctionMenuProps) {
    return (
        <div className="card">
            <div className="d-flex justify-content-start m-1">
                <div className="btn-group-sm" role="group" aria-label="Small button group">
                    <button type="button" onClick={() => apiClearCart().then(() => props.onClearCart())} className="btn btn-outline-dark">clear</button>
                </div>
            </div>
        </div>
    )
}