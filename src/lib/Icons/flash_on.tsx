import React from 'react';
import { IconProps } from "./Icon.Component";

export const FlashOn = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color}`} d="M7 2v11h3v9l7-12h-4l4-8z"/>
        </svg>
    )
}
