import React from 'react';
import { IconProps } from "./Icon.Component";

export const ReadMore = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g> <polygon points="11,10 8,7 8,9.5 3,9.5 3,10.5 8,10.5 8,13"/> <rect fill={`${props.color}`} height="1" width="6" x="11" y="7"/> <rect fill={`${props.color}`} height="1" width="6" x="11" y="12"/> <rect fill={`${props.color}`} height="1" width="4" x="13" y="9.5"/> </g> </g>
        </svg>
    )
}
