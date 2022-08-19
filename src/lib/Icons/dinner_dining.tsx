import React from 'react';
import { IconProps } from "./Icon.Component";

export const DinnerDining = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M5,12.78C4.64,13.11,4.35,13.53,4.18,14H16c0-2.21-1.79-4-4-4c-1.62,0-3,0.96-3.63,2.34C7.96,12.13,7.5,12,7,12 c-0.17,0-0.34,0.02-0.5,0.04V7H8c0.65,0,1.2-0.42,1.41-1H16V5H9.41C9.2,4.42,8.65,4,8,4H4v0.5h1v0.75H4v0.5h1V6.5H4V7h1V12.78z M6,12.18c-0.18,0.06-0.34,0.14-0.5,0.24V7H6V12.18z M8,6.5H6.5V5.75H8V6.5z M8,4.5v0.75H6.5V4.5H8z M5.5,4.5H6v0.75H5.5V4.5z M5.5,5.75H6V6.5H5.5V5.75z"/> <polygon points="3,15 4,16 16,16 17,15"/> </g> </g>
        </svg>
    )
}
