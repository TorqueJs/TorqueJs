import React from 'react';
import { IconProps } from "./Icon.Component";

export const DoubleArrow = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <polygon points="9.21,15 12.43,15 16,10 12.43,5 9.21,5 12.79,10"/> <polygon points="4.21,15 7.43,15 11,10 7.43,5 4.21,5 7.79,10"/> </g>
        </svg>
    )
}
