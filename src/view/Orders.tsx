import {useEffect, useState} from "react";
import {emptyOrder, emptyProduct} from "../interfaces";
import {getProducts, getUserOrders} from "../api/api";
import {OrderTab} from "./OrderTab";

export function Orders() {
    const [Orders, setOrders] = useState({
        orders: Array.of(emptyOrder),
    })
    const [load, setLoad] = useState({
        isLoad: false,
    });

    useEffect(() => {
            if (!load.isLoad) {
                getUserOrders(1).then((orders) => {
                    console.log(orders.data)
                    setOrders({orders: orders.data});
                })
                setLoad({isLoad: true});
            }
        }, [load.isLoad]
    );
    return (
        <div className="container-fluid">
            {Orders.orders.map((order) => <OrderTab order={order}/>)}
        </div>
    )
}