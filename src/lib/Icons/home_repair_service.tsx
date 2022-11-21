import React from 'react';
import { IconProps } from "./Icon.Component";

export const HomeRepairService = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <g> <polygon points="14,13 13,13 13,12 7,12 7,13 6,13 6,12 3,12 3,16 17,16 17,12 14,12"/> </g> <path fill={`${props.color ? props.color : 'black'}`} d="M16,7h-3V5c0-0.55-0.45-1-1-1H8C7.45,4,7,4.45,7,5v2H4C3.45,7,3,7.45,3,8v3h3v-1h1v1h6v-1h1v1h3V8C17,7.45,16.55,7,16,7z M12,7H8V5h4V7z"/> </g> </g>
        </svg>
    )
}
