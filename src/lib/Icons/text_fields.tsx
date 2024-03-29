import React from 'react';
import { IconProps } from "./Icon.Component";

export const TextFields = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="24" width="24"/> </g> <g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M2.5,4v3h5v12h3V7h5V4H2.5z M21.5,9h-9v3h3v7h3v-7h3V9z"/> </g> </g> </g>
        </svg>
    )
}
