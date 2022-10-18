import React from 'react';
import { IconProps } from "./Icon.Component";

export const AddRoad = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <rect fill={`${props.color}`} height="12" width="1" x="4" y="4"/> <rect fill={`${props.color}`} height="7" width="1" x="15" y="4"/> <rect fill={`${props.color}`} height="2" width="1" x="9.5" y="4"/> <rect fill={`${props.color}`} height="2" width="1" x="9.5" y="14"/> <polygon points="18,15 16,15 16,13 15,13 15,15 13,15 13,16 15,16 15,18 16,18 16,16 18,16"/> <rect fill={`${props.color}`} height="2" width="1" x="9.5" y="9"/> </g> </g>
        </svg>
    )
}
