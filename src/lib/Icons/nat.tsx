import React from 'react';
import { IconProps } from "./Icon.Component";

export const Nat = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M5.93,10.5H10v-1H5.93C5.71,8.64,4.93,8,4,8c-1.1,0-2,0.9-2,2s0.9,2,2,2C4.93,12,5.71,11.36,5.93,10.5z M4,11 c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S4.55,11,4,11z"/> <path fill={`${props.color}`} d="M18,10l-3-2v1.5h-3.03C11.72,5.87,8.7,3,5,3v1c3.31,0,6,2.69,6,6s-2.69,6-6,6v1c3.7,0,6.72-2.87,6.97-6.5H15V12L18,10z"/> </g> </g>
        </svg>
    )
}
