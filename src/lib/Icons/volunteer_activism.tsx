import React from 'react';
import { IconProps } from "./Icon.Component";

export const VolunteerActivism = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <rect fill={`${props.color}`} height="8" width="3" x="2" y="9"/> <path fill={`${props.color}`} d="M13,10.33c2.06-1.87,4-3.62,4-5.14C17,3.97,16.03,3,14.8,3c-0.7,0-1.36,0.32-1.8,0.84C12.56,3.32,11.9,3,11.2,3 C9.97,3,9,3.97,9,5.2C9,6.71,10.94,8.46,13,10.33z"/> <path fill={`${props.color}`} d="M15,13h-4l-2.08-0.8l0.36-0.93L11.18,12h1.22c0.33,0,0.59-0.26,0.59-0.59c0-0.25-0.15-0.47-0.38-0.55L7.69,9H6v6.58 L11.28,17L17,15C17,13.9,16.1,13,15,13z"/> </g> </g>
        </svg>
    )
}
