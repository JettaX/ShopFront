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
        <div className="m-2">
            <div className="input-group mb-3">
                <span className="input-group-text">min price</span>
                <input type="number" className="form-control" min={0}
                       onChange={(event) => filterChanged(event.currentTarget.valueAsNumber, defaultFilter.minPrice, setMinPrice)}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">max price</span>
                <input type="number" className="form-control" min={0}
                       onChange={(event) => filterChanged(event.currentTarget.valueAsNumber, defaultFilter.maxPrice, setMaxPrice)}/>
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