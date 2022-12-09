import {useEffect, useState} from "react";
import {emptyOrder} from "../interfaces";
import {OrderTab} from "./OrderTab";
import {getUserOrders} from "../api/OrderApi";
import {getUserId} from "../api/UserApi";

export function Orders() {
    const [Orders, setOrders] = useState({
        orders: Array.of(emptyOrder),
    })
    const [load, setLoad] = useState({
        isLoad: false,
    });

    useEffect(() => {
            if (!load.isLoad) {
                getUserOrders(getUserId()).then((orders) => {
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