import React from 'react';
import { IconProps } from "./Icon.Component";

export const HowToReg = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M0 0h24v24H0z" fill="none" fill-rule="evenodd"/> <g fill-rule="evenodd"> <path fill={`${props.color ? props.color : 'black'}`} d="M9 17l3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4"/> <path fill={`${props.color ? props.color : 'black'}`} d="M15.47 20.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"/> </g>
        </svg>
    )
}
