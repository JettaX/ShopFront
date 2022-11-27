import {defaultFilter, Filter} from "../interfaces";
import React, {Dispatch, useEffect, useState} from "react";

interface CatalogFilterProps {
    filter: Filter,
    filterHandler: (filter: Filter) => void
}

export function CatalogFilter(props: CatalogFilterProps) {
    const [minValue, setMinValue] = useState(defaultFilter.minValue)
    const [maxValue, setMaxValue] = useState(defaultFilter.maxValue)

    useEffect(() => {
            props.filterHandler({
                minValue: minValue,
                maxValue: maxValue,
            });

        }, [minValue, maxValue]
    );

    return (
        <div className="m-2">
            <div className="input-group mb-3">
                <span className="input-group-text">min price</span>
                <input type="number" className="form-control" min={0}
                       onChange={(event) => filterChanged(event.target.valueAsNumber, defaultFilter.minValue, setMinValue)}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">max price</span>
                <input type="number" className="form-control" min={0}
                       onChange={(event) => filterChanged(event.target.valueAsNumber, defaultFilter.maxValue, setMaxValue)}/>
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