import React from 'react';
import { IconProps } from "./Icon.Component";

export const DragHandle = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="24" width="24"/> </g> <g> <g> <g> <path fill={`${props.color}`} d="M20,9H4v2h16V9z M4,15h16v-2H4V15z"/> </g> </g> </g>
        </svg>
    )
}
