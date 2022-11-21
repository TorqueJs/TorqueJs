import React from 'react';
import { IconProps } from "./Icon.Component";

export const NoFood = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="24" width="24"/> <path fill={`${props.color ? props.color : 'black'}`} d="M11.35,8.52L11,5h5V1h2v4h5l-1.38,13.79L11.35,8.52z M1,21v1c0,0.55,0.45,1,1,1h13c0.55,0,1-0.45,1-1v-1H1z M21.9,21.9 L2.1,2.1L0.69,3.51l5.7,5.7C3.28,9.87,1,11.99,1,15h11.17l2,2H1v2h15v-0.17l4.49,4.49L21.9,21.9z"/> </g>
        </svg>
    )
}
