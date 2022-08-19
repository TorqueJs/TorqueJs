import React from 'react';
import { IconProps } from "./Icon.Component";

export const ReceiptLong = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color}`} d="M0,0h24v24H0V0z" fill="none"/> <g> <path fill={`${props.color}`} d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z"/> <rect fill={`${props.color}`} height="2" width="6" x="9" y="7"/> <rect fill={`${props.color}`} height="2" width="2" x="16" y="7"/> <rect fill={`${props.color}`} height="2" width="6" x="9" y="10"/> <rect fill={`${props.color}`} height="2" width="2" x="16" y="10"/> </g>
        </svg>
    )
}