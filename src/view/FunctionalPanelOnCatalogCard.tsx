import {useEffect, useState} from "react";
import {apiGetCountOfBought} from "../api/OrderApi";

interface FunctionalPanelOnCatalogCardProps {
    productId: number,
}

export function FunctionalPanelOnCatalogCard(props: FunctionalPanelOnCatalogCardProps) {
    const [Bought, setBought] = useState(0)

    useEffect(() => {
            apiGetCountOfBought(props.productId).then((count) => {
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