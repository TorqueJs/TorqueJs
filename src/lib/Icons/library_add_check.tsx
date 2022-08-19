import React from 'react';
import { IconProps } from "./Icon.Component";

export const LibraryAddCheck = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20" x="0" y="0"/> <g> <path fill={`${props.color}`} d="M4,16h10v1H4c-0.55,0-1-0.45-1-1V6h1V16z M17,4v9c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1V4c0-0.55,0.45-1,1-1h9 C16.55,3,17,3.45,17,4z M15.04,6.38l-0.71-0.71l-4.24,4.24L8.67,8.5L7.96,9.21l2.12,2.12L15.04,6.38z"/> </g> </g>
        </svg>
    )
}
