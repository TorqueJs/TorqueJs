import React from 'react';
import { IconProps } from "./Icon.Component";

export const EmojiFlags = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g/> <path fill={`${props.color}`} d="M12,8l-1-1H7V5.85C7.29,5.67,7.5,5.37,7.5,5c0-0.55-0.45-1-1-1s-1,0.45-1,1c0,0.37,0.21,0.67,0.5,0.85V16h1v-3h3l1,1h4V8 H12z M14,13h-2.59l-1-1H7V8h3.59l1,1H14V13z"/> </g>
        </svg>
    )
}