import React from 'react';
import { IconProps } from "./Icon.Component";

export const Liquor = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M4,12c0,0.93,0.64,1.71,1.5,1.93V16H4v1h4v-1H6.5v-2.07C7.36,13.71,8,12.93,8,12V6H4V12z M5,7h2v2.3H5V7z"/> <path fill={`${props.color}`} d="M16.35,7.76l-1.2-0.45c-0.39-0.15-0.65-0.52-0.65-0.94V3.5C14.5,3.22,14.28,3,14,3h-2c-0.28,0-0.5,0.22-0.5,0.5v2.87 c0,0.42-0.26,0.79-0.65,0.94l-1.2,0.45C9.26,7.9,9,8.28,9,8.69V16c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1V8.69 C17,8.28,16.74,7.9,16.35,7.76z M12.5,4h1v1h-1V4z M16,16h-6v-2h6V16z M16,10h-6V8.69l1.2-0.45c0.78-0.29,1.3-1.04,1.3-1.87V6h1 v0.37c0,0.83,0.52,1.58,1.3,1.87L16,8.69V10z"/> </g> </g>
        </svg>
    )
}
