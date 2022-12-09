import {useEffect, useState} from "react";
import {getCountOfBought} from "../api/OrderApi";

interface FunctionalPanelOnCatalogCardProps {
    productId: number,
}

export function FunctionalPanelOnCatalogCard(props: FunctionalPanelOnCatalogCardProps) {
    const [Bought, setBought] = useState(0)

    useEffect(() => {
            getCountOfBought(props.productId).then((count) => {
                setBought(count.data);
            })
        }, [Bought, props.productId]
    );

    return (
        <div className="row">
            <p>bought {Bought}</p>
        </div>
    )
}