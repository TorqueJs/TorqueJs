import React from 'react';
import { IconProps } from "./Icon.Component";

export const MarkChatUnread = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20" y="0"/> <path fill={`${props.color ? props.color : 'black'}`} d="M17,6.22V13c0,0.55-0.45,1-1,1H6l-3,3V4c0-0.55,0.45-1,1-1h8.18C12.07,3.31,12,3.65,12,4c0,1.66,1.34,3,3,3 C15.77,7,16.47,6.7,17,6.22z M13,4c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2S13,2.9,13,4z"/> </g>
        </svg>
    )
}
