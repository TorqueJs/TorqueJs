import React from 'react';
import { IconProps } from "./Icon.Component";

export const LineStyle = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g><g><g><path fill={`${props.color}`} d="M3,16h5v-2H3V16z M9.5,16h5v-2h-5V16z M16,16h5v-2h-5V16z M3,20h2v-2H3V20z M7,20h2v-2H7V20z M11,20h2v-2h-2V20z M15,20 h2v-2h-2V20z M19,20h2v-2h-2V20z M3,12h8v-2H3V12z M13,12h8v-2h-8V12z M3,4v4h18V4H3z"/></g></g></g>
        </svg>
    );
}