import React from 'react';
import { IconProps } from "./Icon.Component";

export const Height = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g/> <polygon points="11,7 14,7 10,3.01 6,7 9,7 9,13 6,13 10,16.99 14,13 11,13"/> </g>
        </svg>
    )
}
