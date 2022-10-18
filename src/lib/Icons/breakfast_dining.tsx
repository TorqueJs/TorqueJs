import React from 'react';
import { IconProps } from "./Icon.Component";

export const BreakfastDining = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <path fill={`${props.color}`} d="M14.4,4H5.6C4.37,4,3.25,4.84,3.04,6.06C2.8,7.46,3.72,8.69,5,8.95V15 c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1V8.95c1.28-0.26,2.2-1.49,1.96-2.89C16.75,4.84,15.63,4,14.4,4z M11.5,12h-3V9h3V12z" fill-rule="evenodd"/> </g>
        </svg>
    )
}
