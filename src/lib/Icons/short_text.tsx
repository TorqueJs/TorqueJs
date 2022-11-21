import React from 'react';
import { IconProps } from "./Icon.Component";

export const ShortText = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="24" width="24" x="0"/> </g> <g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M4,9h16v2H4V9z M4,13h10v2H4V13z"/> </g> </g> </g>
        </svg>
    )
}
