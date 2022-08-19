import React from 'react';
import { IconProps } from "./Icon.Component";

export const AmpStories = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g/> <g> <rect fill={`${props.color}`} height="11" width="8" x="6" y="4"/> <rect fill={`${props.color}`} height="9" width="1" x="3" y="5"/> <rect fill={`${props.color}`} height="9" width="1" x="16" y="5"/> </g> </g>
        </svg>
    )
}
