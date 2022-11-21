import React from 'react';
import { IconProps } from "./Icon.Component";

export const DryCleaning = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M14.98,9.49L10.5,7.25V6.44C10.5,6.2,10.3,6,10.06,6h0C9.61,6,9.18,5.74,9.05,5.32C8.84,4.63,9.35,4,10,4 c0.55,0,1,0.45,1,1h1c0-1.26-1.17-2.25-2.48-1.94C8.8,3.22,8.22,3.81,8.05,4.53C7.79,5.66,8.5,6.67,9.5,6.93v0.32L5.02,9.49 C4.4,9.8,4,10.44,4,11.14v0.01C4,12.17,4.83,13,5.85,13H6v4h8v-4h0.15c1.02,0,1.85-0.83,1.85-1.85v-0.01 C16,10.44,15.6,9.8,14.98,9.49z M14.15,12H14v-1H6v1H5.85C5.38,12,5,11.62,5,11.14c0-0.32,0.18-0.62,0.47-0.76L10,8.12l4.53,2.27 c0.29,0.14,0.47,0.44,0.47,0.77C15,11.62,14.62,12,14.15,12z"/> </g>
        </svg>
    )
}
