import React from 'react';
import { IconProps } from "./Icon.Component";

export const HorizontalRule = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> <rect fill={`${props.color}`} height="2" width="12" x="4" y="9"/> </g> <g> <rect fill="none" height="20" width="20"/> <rect fill={`${props.color}`} height="2" width="14" x="3" y="9"/> </g>
        </svg>
    )
}
