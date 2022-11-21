import React from 'react';
import { IconProps } from "./Icon.Component";

export const HorizontalSplit = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M3 19h18v-6H3v6zm0-8h18V9H3v2zm0-6v2h18V5H3z"/>
        </svg>
    );
}