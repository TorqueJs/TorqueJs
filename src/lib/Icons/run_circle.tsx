import React from 'react';
import { IconProps } from "./Icon.Component";

export const RunCircle = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M10,3c-3.87,0-7,3.13-7,7c0,3.87,3.13,7,7,7s7-3.13,7-7C17,6.13,13.87,3,10,3z M11,5c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1 s-1-0.45-1-1C10,5.45,10.45,5,11,5z M13.5,10.62c-0.6,0-1.87-0.38-2.67-1.4l-0.21,1.19L12,11.79V15h-1v-2.79l-1-0.99l-0.42,2.13 l-3.17-0.65l0.2-0.98l2.19,0.45l0.62-3.12L8.5,9.37v1.25h-1V8.67l2.67-0.96c0.46-0.16,0.99,0.01,1.22,0.44 c0.7,1.32,1.77,1.47,2.11,1.47V10.62z"/> </g> </g>
        </svg>
    )
}
