import React from 'react';
import { IconProps } from "./Icon.Component";

export const Sports = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M9.5,6C8.06,6,6.8,6.68,5.98,7.73C5.99,7.66,6,7.58,6,7.5C6,6.67,5.33,6,4.5,6S3,6.67,3,7.5S3.67,9,4.5,9 c0.33,0,0.62-0.11,0.87-0.28C5.13,9.26,5,9.87,5,10.5C5,12.99,7.01,15,9.5,15s4.5-2.01,4.5-4.5c0-0.08-0.02-0.16-0.02-0.24 c0-0.04,0.01-0.09,0.01-0.12C13.93,9.53,14.37,9,14.97,9H18V6H9.5z M4.5,8C4.22,8,4,7.78,4,7.5C4,7.22,4.22,7,4.5,7S5,7.22,5,7.5 C5,7.78,4.78,8,4.5,8z M11.47,12.02C11.02,12.61,10.31,13,9.5,13C8.12,13,7,11.88,7,10.5c0-1.27,0.95-2.3,2.17-2.47 C9.28,8.02,9.39,8,9.5,8c1.38,0,2.5,1.12,2.5,2.5C12,11.07,11.8,11.6,11.47,12.02z"/> </g> <g> <circle fill={`${props.color ? props.color : 'black'}`} cx="9.5" cy="10.5" r="1.5"/> </g> </g> </g>
        </svg>
    )
}
