import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {Orders} from "../view/Orders";
import {OrderTab} from "../view/OrderTab";
import {emptyOrder} from "../interfaces";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Orders">
                <Orders/>
            </ComponentPreview>
            <ComponentPreview path="/OrderTab">
                <OrderTab order={emptyOrder}/>
            </ComponentPreview>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;