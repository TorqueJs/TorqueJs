import React from 'react';
import { IconProps } from "./Icon.Component";

export const Superscript = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> <path fill={`${props.color ? props.color : 'black'}`} d="M17,6l-1,0v1h2v1l-3,0V6c0-0.55,0.45-1,1-1l1,0l0-1h-2V3l2,0c0.55,0,1,0.45,1,1v1C18,5.55,17.55,6,17,6z M5.63,16h1.9 l2.43-3.87h0.08L12.47,16h1.9l-3.32-5.2l3.1-4.8h-1.91l-2.19,3.56H9.96L7.75,6h-1.9l3.09,4.8L5.63,16z"/> </g>
        </svg>
    )
}
