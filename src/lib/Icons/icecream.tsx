import React from 'react';
import { IconProps } from "./Icon.Component";

export const Icecream = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M13.97,6.73C13.83,4.65,12.12,3,10,3S6.17,4.65,6.03,6.73c-0.8,0.34-1.36,1.13-1.36,2.05c0,1.23,0.99,2.22,2.22,2.22 c0.04,0,0.07-0.01,0.11-0.01L10,17l3-6.01c0.04,0,0.07,0.01,0.11,0.01c1.23,0,2.22-0.99,2.22-2.22 C15.33,7.86,14.77,7.07,13.97,6.73z M10,14.76l-2.03-4.06c0.08-0.05,0.16-0.09,0.24-0.15C8.75,10.83,9.35,11,10,11 s1.25-0.17,1.79-0.44c0.07,0.06,0.15,0.1,0.24,0.15L10,14.76z"/> </g> </g>
        </svg>
    )
}
