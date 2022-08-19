import React from 'react';
import { IconProps } from "./Icon.Component";

export const House = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M15,8.29V5h-2v1.57L10,4l-7,6h2v6h4v-4h2v4h4v-6h2L15,8.29z M9,9c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1H9z"/> </g> </g>
        </svg>
    )
}
