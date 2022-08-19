import React from 'react';
import { IconProps } from "./Icon.Component";

export const Forward = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color}`} d="M12 8V4l8 8-8 8v-4H4V8z"/>
        </svg>
    )
}
