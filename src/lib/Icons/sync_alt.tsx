import React from 'react';
import { IconProps } from "./Icon.Component";

export const SyncAlt = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g><rect fill="none" height="24" width="24"/></g><g><g/><g><path fill={`${props.color ? props.color : 'black'}`} d="M22,8l-4-4v3H3v2h15v3L22,8z"/><path fill={`${props.color ? props.color : 'black'}`} d="M2,16l4,4v-3h15v-2H6v-3L2,16z"/></g></g>
        </svg>
    );
}