import React from 'react';
import { IconProps } from "./Icon.Component";

export const FilterListAlt = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color}`} d="M4.25 5.66c.1.13 5.74 7.33 5.74 7.33V19c0 .55.45 1 1.01 1h2.01c.55 0 1.01-.45 1.01-1v-6.02s5.49-7.02 5.75-7.34C20.03 5.32 20 5 20 5c0-.55-.45-1-1.01-1H5.01C4.4 4 4 4.48 4 5c0 .2.06.44.25.66z"/>
        </svg>
    );
}