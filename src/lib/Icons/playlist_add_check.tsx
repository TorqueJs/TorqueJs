import React from 'react';
import { IconProps } from "./Icon.Component";

export const PlaylistAddCheck = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="24" width="24"/> </g> <g> <g> <g> <path fill={`${props.color}`} d="M14,10H2v2h12V10z M14,6H2v2h12V6z M2,16h8v-2H2V16z M21.5,11.5L23,13l-6.99,7l-4.51-4.5L13,14l3.01,3L21.5,11.5z"/> </g> </g> </g>
        </svg>
    )
}