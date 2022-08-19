import React from 'react';
import { IconProps } from "./Icon.Component";

export const NextWeek = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="24" width="24" x="0"/> </g> <g> <g> <g> <path fill={`${props.color}`} d="M20,7h-4V5c0-0.55-0.22-1.05-0.59-1.41C15.05,3.22,14.55,3,14,3h-4C8.9,3,8,3.9,8,5v2H4C2.9,7,2,7.9,2,9v11 c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9C22,7.9,21.1,7,20,7z M10,5h4v2h-4V5z M11,18.5l-1-1l3-3l-3-3l1-1l4,4L11,18.5z"/> </g> </g> </g>
        </svg>
    )
}