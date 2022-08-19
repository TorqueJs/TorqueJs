import React from 'react';
import { IconProps } from "./Icon.Component";

export const PushPin = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M15,10c-1.1,0-2-0.9-2-2V4h0.5C13.78,4,14,3.78,14,3.5C14,3.22,13.78,3,13.5,3h-7C6.22,3,6,3.22,6,3.5 C6,3.78,6.22,4,6.5,4H7v4c0,1.1-0.9,2-2,2v1h4.5v5.5L10,17l0.5-0.5V11H15V10z"/> </g> </g>
        </svg>
    )
}
