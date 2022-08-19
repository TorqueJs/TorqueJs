import React from 'react';
import { IconProps } from "./Icon.Component";

export const EmojiEvents = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g/> <path fill={`${props.color}`} d="M15,6h-2V5H7v1H5C4.45,6,4,6.45,4,7v1c0,1.66,1.34,3,3,3h0.18c0.36,1.01,1.24,1.77,2.32,1.95V15H7v1h2.5h1H13v-1h-2.5 v-2.05c1.08-0.18,1.96-0.94,2.32-1.95H13c1.66,0,3-1.34,3-3V7C16,6.45,15.55,6,15,6z M7,10c-1.1,0-2-0.9-2-2V7h2V10z M15,8 c0,1.1-0.9,2-2,2V7h2V8z"/> </g>
        </svg>
    )
}