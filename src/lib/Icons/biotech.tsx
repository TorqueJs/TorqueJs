import React from 'react';
import { IconProps } from "./Icon.Component";

export const Biotech = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M6,15c-0.55,0-1,0.45-1,1h10c0-0.55-0.45-1-1-1h-4v-2h3c0.55,0,1-0.45,1-1H8.47v0C7.11,11.98,6,10.87,6,9.5 c0-0.93,0.51-1.73,1.26-2.16C7.1,7.1,7,6.81,7,6.5c0-0.05,0.01-0.11,0.02-0.16C5.83,6.9,5,8.1,5,9.5c0,1.76,1.31,3.2,3,3.45V15H6z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M8.15,5.04C8.26,5.02,8.38,5,8.5,5C9.33,5,10,5.67,10,6.5c0,0.59-0.34,1.09-0.83,1.34l0.59,1.62l0.94-0.34l0.32,0.88 l0.94-0.34l-0.32-0.88l0.94-0.34l-1.84-5.06L9.8,3.71L9.47,2.83L8.53,3.17l0.32,0.88L7.92,4.39L8.15,5.04z"/> <circle fill={`${props.color ? props.color : 'black'}`} cx="8.5" cy="6.5" r=".75"/> </g> </g>
        </svg>
    )
}
