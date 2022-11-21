import React from 'react';
import { IconProps } from "./Icon.Component";

export const AttachEmail = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M16,8V4c0-0.55-0.45-1-1-1H3C2.45,3,2,3.45,2,4v10c0,0.55,0.45,1,1,1h9v-5c0-1.1,0.9-2,2-2H16z M9,8.93L3,5.18V4l6,3.75 L15,4v1.18L9,8.93z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M17,11v3.5c0,0.83-0.67,1.5-1.5,1.5S14,15.33,14,14.5v-4c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5V14h1v-3.5 C16,9.67,15.33,9,14.5,9S13,9.67,13,10.5v4c0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5V11H17z"/> </g> </g>
        </svg>
    )
}
