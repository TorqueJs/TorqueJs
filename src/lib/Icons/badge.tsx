import React from 'react';
import { IconProps } from "./Icon.Component";

export const Badge = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <path fill={`${props.color}`} d="M16,6h-4V4c0-0.55-0.45-1-1-1H9C8.45,3,8,3.45,8,4v2H4C3.45,6,3,6.45,3,7v9c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1V7 C17,6.45,16.55,6,16,6z M9,4h2v4H9V4z M8,10c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S7.45,10,8,10z M10,14H6v-0.5 c0-0.67,1.33-1,2-1s2,0.33,2,1V14z M14,13h-3v-1h3V13z M14,11h-3v-1h3V11z"/> </g>
        </svg>
    )
}
