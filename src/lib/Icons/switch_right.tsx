import React from 'react';
import { IconProps } from "./Icon.Component";

export const SwitchRight = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <rect fill="none" height="24" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 24 24)" width="24"/> <path fill={`${props.color}`} d="M15.5,15.38V8.62L18.88,12L15.5,15.38 M14,19l7-7l-7-7V19L14,19z M10,19V5l-7,7L10,19z"/>
        </svg>
    )
}
