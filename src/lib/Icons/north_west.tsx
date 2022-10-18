import React from 'react';
import { IconProps } from "./Icon.Component";

export const NorthWest = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <rect fill="none" height="24" width="24"/> <path fill={`${props.color}`} d="M5,15h2V8.41L18.59,20L20,18.59L8.41,7H15V5H5V15z"/>
        </svg>
    )
}
