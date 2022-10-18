import React from 'react';
import { IconProps } from "./Icon.Component";

export const PersonRemoveAltOne = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M8,11c2,0,6,0.96,6,2.86V16H2v-2.14C2,11.96,6,11,8,11z"/> <circle fill={`${props.color}`} cx="8" cy="7" r="3"/> <rect fill={`${props.color}`} height="1" width="4" x="13" y="9"/> </g> </g>
        </svg>
    )
}
