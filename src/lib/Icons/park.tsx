import React from 'react';
import { IconProps } from "./Icon.Component";

export const Park = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <polygon points="13,10 15,10 9.97,3 5,10 7,10 4,14 9,14 9,17 11.03,17 11.03,14 16,14"/> </g>
        </svg>
    )
}
