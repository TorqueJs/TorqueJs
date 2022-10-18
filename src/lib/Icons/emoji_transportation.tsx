import React from 'react';
import { IconProps } from "./Icon.Component";

export const EmojiTransportation = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g/> <g> <polygon points="8,5 11,5 11,8 12,8 12,4 7,4 7,7 4,7 4,16 5,16 5,8 8,8"/> <rect fill={`${props.color}`} height="1" width="1" x="6" y="9"/> <rect fill={`${props.color}`} height="1" width="1" x="9" y="6"/> <rect fill={`${props.color}`} height="1" width="1" x="6" y="11"/> <rect fill={`${props.color}`} height="1" width="1" x="6" y="13"/> <path fill={`${props.color}`} d="M15.11,9.34C15.05,9.14,14.85,9,14.64,9H9.36C9.15,9,8.95,9.14,8.89,9.34L8,12v2v0.5V15v0.5C8,15.78,8.22,16,8.5,16 S9,15.78,9,15.5V15h6v0.5c0,0.28,0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5V15v-0.5V14v-2L15.11,9.34z M9.72,10h4.56l0.67,2H9.05L9.72,10 z M9.5,14C9.22,14,9,13.78,9,13.5S9.22,13,9.5,13s0.5,0.22,0.5,0.5S9.78,14,9.5,14z M14.5,14c-0.28,0-0.5-0.22-0.5-0.5 s0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5S14.78,14,14.5,14z"/> </g> </g>
        </svg>
    )
}
