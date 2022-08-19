import React from 'react';
import { IconProps } from "./Icon.Component";

export const CallReceived = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color}`} d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"/>
        </svg>
    )
}
