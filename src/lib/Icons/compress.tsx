import React from 'react';
import { IconProps } from "./Icon.Component";

export const Compress = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M8 19h3v3h2v-3h3l-4-4-4 4zm8-15h-3V1h-2v3H8l4 4 4-4zM4 9v2h16V9H4z"/><path fill={`${props.color ? props.color : 'black'}`} d="M4 12h16v2H4z"/><path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}