import React from 'react';
import { IconProps } from "./Icon.Component";

export const QuickReply = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g><g><g><path fill={`${props.color ? props.color : 'black'}`} d="M22,4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9v-8h7V4z"/></g><g><polygon fill={`${props.color ? props.color : 'black'}`} points="22.5,16 20.3,16 22,12 17,12 17,18 19,18 19,23"/></g></g></g>
        </svg>
    );
}