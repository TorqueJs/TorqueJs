import React from 'react';
import { IconProps } from "./Icon.Component";

export const ElectricMoped = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M15,5.5C15,4.67,14.33,4,13.5,4H12v1h1.5C13.78,5,14,5.22,14,5.5v1.29L10.79,10H9V6H6C4.34,6,3,7.34,3,9v2h2 c0,1.1,0.9,2,2,2s2-0.9,2-2h2.21L15,7.21V5.5z M7,12c-0.55,0-1-0.45-1-1h2C8,11.55,7.55,12,7,12z"/> <rect fill={`${props.color}`} height="1" width="4" x="5" y="4"/> <path fill={`${props.color}`} d="M15,9c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2s2-0.9,2-2C17,9.9,16.1,9,15,9z M15,12c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1 s1,0.45,1,1C16,11.55,15.55,12,15,12z"/> </g> <polygon points="7,15 9.5,15 9.5,14 13,16 10.5,16 10.5,17"/> </g>
        </svg>
    )
}
