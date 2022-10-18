import React from 'react';
import { IconProps } from "./Icon.Component";

export const DynamicFeed = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20" x="0" y="0"/> </g> <g> <g/> <g> <g> <path fill={`${props.color}`} d="M4,8H3v7c0,0.55,0.45,1,1,1h9v-1H4V8z"/> </g> <g> <path fill={`${props.color}`} d="M6,6H5v7c0,0.55,0.45,1,1,1h9v-1H6V6z"/> </g> <g> <path fill={`${props.color}`} d="M16,4H8C7.45,4,7,4.45,7,5v6c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1V5C17,4.45,16.55,4,16,4z M16,11H8V7h8V11z"/> </g> </g> </g> <g display="none"> <g display="inline"/> <path fill={`${props.color}`} d="M4,15V8H3v7c0,0.55,0.45,1,1,1h9v-1H4z" display="inline"/> <path fill={`${props.color}`} d="M6,13V6H5v7c0,0.55,0.45,1,1,1h9v-1H6z" display="inline"/> <g display="inline"> <path fill={`${props.color}`} d="M16,5v6H8V5H16 M16,4H8C7.45,4,7,4.45,7,5v6c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1V5C17,4.45,16.55,4,16,4L16,4z"/> </g> <g display="inline"> <rect fill={`${props.color}`} height="2" width="8" x="8" y="5"/> </g> </g>
        </svg>
    )
}
