import React from 'react';
import { IconProps } from "./Icon.Component";

export const PersonAddAlt = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M2,13.86V16h12v-2.14c0-1.9-4-2.86-6-2.86C6,11,2,11.96,2,13.86z M3,13.86C3,13.04,5.8,12,8,12c2.2,0,5,1.04,5,1.86V15H3 V13.86z"/> <path fill={`${props.color}`} d="M11,7c0-1.66-1.34-3-3-3C6.34,4,5,5.34,5,7c0,1.66,1.34,3,3,3C9.66,10,11,8.66,11,7z M10,7c0,1.1-0.9,2-2,2S6,8.1,6,7 s0.9-2,2-2S10,5.9,10,7z"/> <polygon points="13,9 15,9 15,7 16,7 16,9 18,9 18,10 16,10 16,12 15,12 15,10 13,10"/> </g> </g>
        </svg>
    )
}
