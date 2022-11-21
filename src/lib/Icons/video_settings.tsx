import React from 'react';
import { IconProps } from "./Icon.Component";

export const VideoSettings = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M3,5h14v4h1V5c0-0.55-0.45-1-1-1H3C2.45,4,2,4.45,2,5v10c0,0.55,0.45,1,1,1h8v-1H3V5z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M19.1,14.2l0.87-0.69l-0.88-1.52l-1.03,0.4c-0.16-0.12-0.34-0.22-0.53-0.3L17.38,11h-1.75l-0.16,1.1 c-0.18,0.08-0.36,0.18-0.52,0.3l-1.04-0.41l-0.88,1.52l0.87,0.7c-0.02,0.2-0.03,0.4,0,0.6l-0.87,0.69l0.88,1.52l1.03-0.4 c0.16,0.12,0.34,0.22,0.53,0.3L15.63,18h1.75l0.16-1.1c0.18-0.08,0.36-0.18,0.52-0.3l1.04,0.41l0.88-1.52l-0.87-0.7 C19.12,14.59,19.12,14.4,19.1,14.2z M16.5,15.5c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1 C17.5,15.05,17.05,15.5,16.5,15.5z"/> <polygon points="8,13 12.5,10 8,7"/> </g> </g>
        </svg>
    )
}
