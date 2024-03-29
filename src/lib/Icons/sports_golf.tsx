import React from 'react';
import { IconProps } from "./Icon.Component";

export const SportsGolf = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M10,3C7.24,3,5,5.24,5,8s2.24,5,5,5s5-2.24,5-5S12.76,3,10,3z M10,12c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4s4,1.79,4,4 C14,10.21,12.21,12,10,12z"/> <circle fill={`${props.color ? props.color : 'black'}`} cx="8.5" cy="6.5" r=".5"/> <circle fill={`${props.color ? props.color : 'black'}`} cx="11.5" cy="6.5" r=".5"/> <circle fill={`${props.color ? props.color : 'black'}`} cx="10" cy="5.5" r=".5"/> <path fill={`${props.color ? props.color : 'black'}`} d="M7,15h1.5c0.55,0,1,0.45,1,1v1h1v-1c0-0.55,0.45-1,1-1H13v-1H7V15z"/> </g> </g>
        </svg>
    )
}
