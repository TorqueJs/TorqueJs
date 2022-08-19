import React from 'react';
import { IconProps } from "./Icon.Component";

export const StopCircle = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <path fill={`${props.color}`} d="M10,3c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7S13.87,3,10,3z M13,13H7V7h6V13z" fill-rule="evenodd"/> </g>
        </svg>
    )
}
