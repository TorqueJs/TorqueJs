import React from 'react';
import { IconProps } from "./Icon.Component";

export const Publish = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"/>
        </svg>
    )
}
