import React from 'react';
import { IconProps } from "./Icon.Component";

export const CallMissedOutgoing = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="24" width="24" x="0"/> </g> <g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M3,8.41l9,9l7-7V15h2V7h-8v2h4.59L12,14.59L4.41,7L3,8.41z"/> </g> </g> </g>
        </svg>
    )
}
