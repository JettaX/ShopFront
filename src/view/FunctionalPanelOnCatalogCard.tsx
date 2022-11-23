import {useEffect, useState} from "react";
import {getCountOfBought} from "../api/api";

interface FunctionalPanelOnCatalogCardProps {
    productId: number,
}

export function FunctionalPanelOnCatalogCard(props: FunctionalPanelOnCatalogCardProps) {
    const [Bought, setBought] = useState({
        bought: 0,
    })

    useEffect(() => {
            getCountOfBought(props.productId).then((count) => {
                setBought({bought: count.data});
            })
        }, [Bought.bought, props.productId]
    );

    return (
        <div className="row">
            <p>bought {Bought.bought}</p>
        </div>
    )
}