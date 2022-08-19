import React from 'react';
import { IconProps } from "./Icon.Component";

export const Deck = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g> <polygon points="17,8 10,3 3,8 9.5,8 9.5,17 10.5,17 10.5,8"/> <polygon points="4.92,13 4.37,10 3.38,10.18 4,13.5 4,17 5,17 5,14 7,14 7,17 8,17 8,13"/> <polygon points="15.63,10 15.08,13 12,13 12,17 13,17 13,14 15,14 15,17 16,17 16,13.5 16.62,10.18"/> </g> </g>
        </svg>
    )
}
