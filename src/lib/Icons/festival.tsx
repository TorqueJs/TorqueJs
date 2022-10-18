import React from 'react';
import { IconProps } from "./Icon.Component";

export const Festival = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <polygon points="10.5,5.36 10.5,4 13,4 12,3 13,2 9.5,2 9.5,5.36 3,10 3,17 8,17 8,13.5 10,12 12,13.5 12,17 17,17 17,10"/> </g>
        </svg>
    )
}
