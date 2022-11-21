import React from 'react';
import { IconProps } from "./Icon.Component";

export const Science = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M15.74,14.39L11.5,8.93V5.87l0.85-1.06C12.61,4.48,12.38,4,11.96,4H8.04C7.62,4,7.39,4.48,7.65,4.81L8.5,5.87v3.05 l-4.24,5.46C3.74,15.04,4.21,16,5.04,16h9.91C15.79,16,16.26,15.04,15.74,14.39z"/> </g>
        </svg>
    )
}
