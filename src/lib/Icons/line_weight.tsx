import React from 'react';
import { IconProps } from "./Icon.Component";

export const LineWeight = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g><g><g><path fill={`${props.color}`} d="M3,17h18v-2H3V17z M3,20h18v-1H3V20z M3,13h18v-3H3V13z M3,4v4h18V4H3z"/></g></g></g>
        </svg>
    );
}