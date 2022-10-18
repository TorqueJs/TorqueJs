import React from 'react';
import { IconProps } from "./Icon.Component";

export const SportsFootball = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M4.01,12.49c-0.04,1.57,0.22,2.81,0.45,3.05s1.47,0.5,3.05,0.45L4.01,12.49z"/> <path fill={`${props.color}`} d="M15.99,7.51c0.04-1.57-0.22-2.81-0.45-3.05c-0.23-0.23-1.47-0.5-3.05-0.45L15.99,7.51z"/> <path fill={`${props.color}`} d="M11.18,4.11C9.49,4.34,7.65,4.96,6.31,6.31c-1.34,1.34-1.97,3.19-2.19,4.88l4.71,4.71c1.69-0.23,3.53-0.85,4.88-2.19 s1.97-3.19,2.19-4.88L11.18,4.11z M8.23,12.47l-0.71-0.71l4.24-4.24l0.71,0.71L8.23,12.47z"/> </g> </g>
        </svg>
    )
}
