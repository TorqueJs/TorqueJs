import React from 'react';
import { IconProps } from "./Icon.Component";

export const PostAdd = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g/> <g> <path fill={`${props.color}`} d="M14,15H5V6h6V5H5C4.45,5,4,5.45,4,6V15c0,0.55,0.45,1,1,1H14c0.55,0,1-0.45,1-1V9h-1V15z"/> <polygon points="7,8 7,9 11,9 12,9 12,8"/> <rect fill={`${props.color}`} height="1" width="5" x="7" y="10"/> <rect fill={`${props.color}`} height="1" width="5" x="7" y="12"/> <polygon points="15,3 14,3 14,5 14,5 12,5 12,6 14,6 14,8 15,8 15,6 15,6 17,6 17,5 15,5"/> </g> </g>
        </svg>
    )
}
