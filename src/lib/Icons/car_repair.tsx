import React from 'react';
import { IconProps } from "./Icon.Component";

export const CarRepair = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <polygon points="4,14 4,15 9.5,15 9.5,17 10.5,17 10.5,15 16,15 16,14"/> <path fill={`${props.color}`} d="M5.5,13H6c0.28,0,0.5-0.22,0.5-0.5v-1h7v1c0,0.28,0.22,0.5,0.5,0.5h0.5c0.28,0,0.5-0.22,0.5-0.5V8l-1.22-3.34 C13.64,4.26,13.26,4,12.84,4H7.19C6.78,4,6.4,4.26,6.26,4.65L5,8v4.5C5,12.78,5.22,13,5.5,13z M7,10.5 c-0.41,0-0.75-0.34-0.75-0.75C6.25,9.34,6.59,9,7,9s0.75,0.34,0.75,0.75C7.75,10.16,7.41,10.5,7,10.5z M13,10.5 c-0.41,0-0.75-0.34-0.75-0.75C12.25,9.34,12.59,9,13,9s0.75,0.34,0.75,0.75C13.75,10.16,13.41,10.5,13,10.5z M7.19,5h5.65l1.1,3 H6.07L7.19,5z"/> </g> </g>
        </svg>
    )
}
