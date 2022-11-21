import React from 'react';
import { IconProps } from "./Icon.Component";

export const Hardware = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M8,15c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-5H8V15z"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M14,4l-2,2V4H8C6.34,4,5,5.34,5,7h3v2h4V7l2,2h1V4H14z"/> </g> </g> </g>
        </svg>
    )
}
