import React from 'react';
import { IconProps } from "./Icon.Component";

export const EmojiFoodBeverage = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g/> <g> <path fill={`${props.color}`} d="M15,5H7.75v2.17l1.14,0.76C8.96,7.97,9,8.05,9,8.13v2.62C9,10.89,8.89,11,8.75,11h-2.5C6.11,11,6,10.89,6,10.75V8.13 c0-0.08,0.04-0.16,0.11-0.21l1.14-0.76V5H5v7c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2V9h1c0.55,0,1-0.45,1-1V6C16,5.45,15.55,5,15,5z M15,8h-1V6h1V8z"/> <rect fill={`${props.color}`} height="1" width="10" x="5" y="15"/> </g> </g>
        </svg>
    )
}
