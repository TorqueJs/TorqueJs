import React from 'react';
import { IconProps } from "./Icon.Component";

export const Subscript = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> <path fill={`${props.color}`} d="M17,15l-1,0v1h2v1h-3v-2c0-0.55,0.45-1,1-1l1,0l0-1h-2v-1l2,0c0.55,0,1,0.45,1,1v1C18,14.55,17.55,15,17,15z M5.63,14h1.9 l2.43-3.87h0.08L12.47,14h1.9l-3.32-5.2l3.1-4.8h-1.91l-2.19,3.56H9.96L7.75,4h-1.9l3.09,4.8L5.63,14z"/> </g>
        </svg>
    )
}
