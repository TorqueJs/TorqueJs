import React from 'react';
import { IconProps } from "./Icon.Component";

export const SkipNext = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color}`} d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
        </svg>
    )
}