import React from 'react';
import { IconProps } from "./Icon.Component";

export const Insights = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g> <polygon points="12.5,8 13.29,6.28 15,5.5 13.29,4.72 12.5,3 11.74,4.72 10,5.5 11.74,6.28"/> <polygon points="4,10 4.4,8.4 6,8 4.4,7.6 4,6 3.6,7.6 2,8 3.6,8.4"/> <path fill={`${props.color}`} d="M16.5,6c-1.07,0-1.84,1.12-1.35,2.14l-3.01,3.01c-0.52-0.25-0.99-0.14-1.29,0l-1.01-1.01C9.94,9.95,10,9.73,10,9.5 C10,8.67,9.33,8,8.5,8S7,8.67,7,9.5c0,0.23,0.06,0.45,0.15,0.64l-3.01,3.01C3.95,13.06,3.73,13,3.5,13C2.67,13,2,13.67,2,14.5 S2.67,16,3.5,16S5,15.33,5,14.5c0-0.23-0.06-0.45-0.15-0.64l3.01-3.01c0.52,0.25,0.99,0.14,1.29,0l1.01,1.01 C10.06,12.05,10,12.27,10,12.5c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5c0-0.23-0.06-0.45-0.15-0.64l3.01-3.01 C16.89,9.35,18,8.56,18,7.5C18,6.67,17.33,6,16.5,6z"/> </g> </g>
        </svg>
    )
}
