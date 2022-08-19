import React from 'react';
import { IconProps } from "./Icon.Component";

export const Pause = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color}`} d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
    )
}