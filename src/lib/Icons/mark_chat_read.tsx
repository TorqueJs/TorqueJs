import React from 'react';
import { IconProps } from "./Icon.Component";

export const MarkChatRead = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20" x="0"/> <path fill={`${props.color}`} d="M13.76,15l-2.12-2.12l0.71-0.71l1.41,1.41l3.54-3.54L18,10.76L13.76,15z M10,13c0-2.76,2.24-5,5-5c0.71,0,1.39,0.15,2,0.42 V4c0-0.55-0.45-1-1-1H4C3.45,3,3,3.45,3,4v13l3-3h4.1C10.04,13.68,10,13.34,10,13z"/> </g>
        </svg>
    )
}
