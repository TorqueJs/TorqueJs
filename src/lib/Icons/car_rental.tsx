import React from 'react';
import { IconProps } from "./Icon.Component";

export const CarRental = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M12.84,8H7.19C6.78,8,6.4,8.26,6.26,8.65L5,12v4.5C5,16.78,5.22,17,5.5,17H6c0.28,0,0.5-0.22,0.5-0.5v-1h7v1 c0,0.28,0.22,0.5,0.5,0.5h0.5c0.28,0,0.5-0.22,0.5-0.5V12l-1.22-3.34C13.64,8.26,13.26,8,12.84,8z M7,14.5 c-0.41,0-0.75-0.34-0.75-0.75C6.25,13.34,6.59,13,7,13s0.75,0.34,0.75,0.75C7.75,14.16,7.41,14.5,7,14.5z M13,14.5 c-0.41,0-0.75-0.34-0.75-0.75c0-0.41,0.34-0.75,0.75-0.75s0.75,0.34,0.75,0.75C13.75,14.16,13.41,14.5,13,14.5z M6.07,12l1.12-3 h5.65l1.1,3H6.07z"/> <path fill={`${props.color}`} d="M8.93,3.5C8.71,2.64,7.93,2,7,2C5.9,2,5,2.9,5,4c0,1.1,0.9,2,2,2c0.93,0,1.71-0.64,1.93-1.5H13V6h1V4.5h1v-1H8.93z M7,5 C6.45,5,6,4.55,6,4c0-0.55,0.45-1,1-1s1,0.45,1,1C8,4.55,7.55,5,7,5z"/> </g> </g>
        </svg>
    )
}
