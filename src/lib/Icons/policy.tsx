import React from 'react';
import { IconProps } from "./Icon.Component";

export const Policy = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g/> <g> <path fill={`${props.color}`} d="M10,13c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3c0,0.65-0.21,1.24-0.56,1.73l2.1,2.1C15.46,12.52,16,10.94,16,9.31V5 l-6-2L4,5v4.31c0,3.55,2.56,6.88,6,7.69c1.53-0.36,2.89-1.22,3.92-2.37l-2.19-2.19C11.24,12.79,10.65,13,10,13z"/> <circle fill={`${props.color}`} cx="10" cy="10" r="2"/> </g> </g>
        </svg>
    )
}
