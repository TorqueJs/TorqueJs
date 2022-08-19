import React from 'react';
import { IconProps } from "./Icon.Component";

export const SouthEast = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <rect fill={`${props.color}`} fill="none" height="24" width="24"/> <path fill={`${props.color}`} d="M19,9h-2v6.59L5.41,4L4,5.41L15.59,17H9v2h10V9z"/>
        </svg>
    )
}
