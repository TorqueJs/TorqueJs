import React from 'react';
import { IconProps } from "./Icon.Component";

export const ElectricCar = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M14.28,3.55C14.11,3.21,13.76,3,13.38,3H6.62C6.24,3,5.89,3.21,5.72,3.55L4,7v5.5C4,12.78,4.22,13,4.5,13h1 C5.78,13,6,12.78,6,12.5V12h8v0.5c0,0.28,0.22,0.5,0.5,0.5h1c0.28,0,0.5-0.22,0.5-0.5V7L14.28,3.55z M6.62,4h6.76l1.5,3H5.12 L6.62,4z M6,10c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C7,9.55,6.55,10,6,10z M14,10c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C15,9.55,14.55,10,14,10z"/> <polygon points="7,15 9.5,15 9.5,14 13,16 10.5,16 10.5,17"/> </g>
        </svg>
    )
}
