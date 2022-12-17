import {defaultFilter, Filter} from "../interfaces";
import React, {Dispatch, useEffect, useState} from "react";

interface CatalogFilterProps {
    filter: Filter,
    filterHandler: (filter: Filter) => void
}

export function CatalogFilter(props: CatalogFilterProps) {
    const [minPrice, setMinPrice] = useState(defaultFilter.minPrice)
    const [maxPrice, setMaxPrice] = useState(defaultFilter.maxPrice)

    useEffect(() => {
            props.filterHandler({
                minPrice: minPrice,
                maxPrice: maxPrice,
            });

        }, [minPrice, maxPrice]
    );

    return (
        <div className="text-center d-flex flex-column">
            <h5>Price</h5>
            <div className="row">
                <div className="input-group m-2">
                    <span className="input-group-text">from</span>
                    <input type="number" className="form-control" min={0}
                           onChange={(event) => filterChanged(event.currentTarget.valueAsNumber, defaultFilter.minPrice, setMinPrice)}/>
                </div>
                <div className="input-group m-2">
                    <span className="input-group-text">to</span>
                    <input type="number" className="form-control" min={0}
                           onChange={(event) => filterChanged(event.currentTarget.valueAsNumber, defaultFilter.maxPrice, setMaxPrice)}/>
                </div>
            </div>
        </div>

    )
}

function filterChanged(newValue: number, oldValue: number, state: Dispatch<React.SetStateAction<number>>) {
    if (isNaN(newValue)) {
        state(oldValue);
    } else {
        state(newValue);
    }
}