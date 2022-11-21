import React from 'react';
import { IconProps } from "./Icon.Component";

export const SportsBaseball = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M15.22,5.34C13.34,6.06,12,7.87,12,10s1.34,3.94,3.22,4.66C16.32,13.42,17,11.79,17,10C17,8.21,16.32,6.58,15.22,5.34z"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M11,10c0-2.39,1.41-4.45,3.43-5.42C13.23,3.59,11.68,3,10,3S6.77,3.59,5.57,4.58C7.59,5.55,9,7.61,9,10 s-1.41,4.45-3.43,5.42C6.77,16.41,8.32,17,10,17s3.23-0.59,4.43-1.58C12.41,14.45,11,12.39,11,10z"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M4.78,5.34C3.68,6.58,3,8.21,3,10c0,1.79,0.68,3.42,1.78,4.66C6.66,13.94,8,12.13,8,10S6.66,6.06,4.78,5.34z"/> </g> </g> </g>
        </svg>
    )
}
