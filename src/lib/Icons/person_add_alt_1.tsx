import React from 'react';
import { IconProps } from "./Icon.Component";

export const PersonAddAltOne = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M8,11c2,0,6,0.96,6,2.86V16H2v-2.14C2,11.96,6,11,8,11z"/> <circle fill={`${props.color}`} cx="8" cy="7" r="3"/> <polygon points="13,10 13,9 15,9 15,7 16,7 16,9 18,9 18,10 16,10 16,12 15,12 15,10"/> </g> </g>
        </svg>
    )
}
