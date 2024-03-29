import React from 'react';
import { IconProps } from "./Icon.Component";

export const Bedtime = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M10.24,3C6.21,2.87,3,6.09,3,10c0,3.87,3.14,7,7,7c2.6,0,4.86-1.42,6.07-3.51C10.81,13.31,7.6,7.58,10.24,3z"/> </g> </g>
        </svg>
    )
}
