import React from 'react';
import { IconProps } from "./Icon.Component";

export const Apartment = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <path fill={`${props.color}`} d="M14,9V4H7v3H3v9h7v-3h1v3h6V9H14z M6,14H5v-1h1V14z M6,12H5v-1h1V12z M6,10H5V9h1V10z M10,11H9v-1h1V11z M10,9H9V8h1V9z M10,7H9V6h1V7z M12,11h-1v-1h1V11z M12,9h-1V8h1V9z M12,7h-1V6h1V7z M15,14h-1v-1h1V14z M15,12h-1v-1h1V12z"/> </g>
        </svg>
    )
}
