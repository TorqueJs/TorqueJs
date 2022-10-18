import React from 'react';
import { IconProps } from "./Icon.Component";

export const Fireplace = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <path fill={`${props.color}`} d="M3,3v14h14V3H3z M10.45,11.21c-0.06-0.34-0.05-0.64,0.06-0.96c0.41,0.91,1.61,1.23,1.48,2.39 c-0.14,1.26-1.58,1.77-2.54,0.99c0.57-0.18,1.05-0.78,1.15-1.22C10.7,11.99,10.52,11.62,10.45,11.21z M16,16h-2v-1h-1.33 c0.81-0.7,1.33-1.71,1.33-2.85c0-1.45-0.87-2.19-1.48-2.59C10.16,8.01,10.8,6,10.8,6C5.42,8.74,5.99,11.74,6,12.15 C6.03,13.1,6.63,14.21,7.53,15H6v1H4V4h12V16z"/> </g>
        </svg>
    )
}
