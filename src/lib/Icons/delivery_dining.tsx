import React from 'react';
import { IconProps } from "./Icon.Component";

export const DeliveryDining = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M15,7.5C15,6.67,14.33,6,13.5,6H12v1h1.5C13.78,7,14,7.22,14,7.5v1.29L10.79,12H9V8H6c-1.66,0-3,1.34-3,3v2h2 c0,1.1,0.9,2,2,2s2-0.9,2-2h2.21L15,9.21V7.5z M7,14c-0.55,0-1-0.45-1-1h2C8,13.55,7.55,14,7,14z"/> <rect fill={`${props.color}`} height="1" width="4" x="5" y="6"/> <path fill={`${props.color}`} d="M15,11c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2s2-0.9,2-2C17,11.9,16.1,11,15,11z M15,14c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1 s1,0.45,1,1C16,13.55,15.55,14,15,14z"/> </g> </g>
        </svg>
    )
}
