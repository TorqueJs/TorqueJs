import React from 'react';
import { IconProps } from "./Icon.Component";

export const MarkEmailRead = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> <path fill={`${props.color ? props.color : 'black'}`} d="M16,4H4C3.45,4,3,4.45,3,5v10c0,0.55,0.45,1,1,1h6.1c-0.07-0.32-0.1-0.66-0.1-1c0-2.76,2.24-5,5-5c0.71,0,1.39,0.15,2,0.42 V5C17,4.45,16.55,4,16,4z M16,6.18L10,10L4,6.18V5l6,3.82L16,5V6.18z M13.76,17l-2.12-2.12l0.71-0.71l1.41,1.41l3.54-3.54L18,12.76 L13.76,17z"/> </g>
        </svg>
    )
}
