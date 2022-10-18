import React from 'react';
import { IconProps } from "./Icon.Component";

export const AirplanemodeInactive = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20" x="0"/> <path fill={`${props.color}`} d="M13.12,11.71L9,7.59V4c0-0.55,0.45-1,1-1s1,0.45,1,1v4l6,4v1L13.12,11.71z M17.07,17.07L2.93,2.93L2.22,3.64l5.33,5.33 L3,12v1l6-2v4l-1.5,1v1l2.5-0.5l2.5,0.5v-1L11,15v-2.59l5.36,5.36L17.07,17.07z"/> </g>
        </svg>
    )
}
