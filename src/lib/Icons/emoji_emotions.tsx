import React from 'react';
import { IconProps } from "./Icon.Component";

export const EmojiEmotions = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g/> <path fill={`${props.color}`} d="M9.99,3C6.13,3,3,6.14,3,10s3.13,7,6.99,7c3.87,0,7.01-3.14,7.01-7S13.86,3,9.99,3z M7,7c0.55,0,1,0.45,1,1 c0,0.55-0.45,1-1,1S6,8.55,6,8C6,7.45,6.45,7,7,7z M10,14c-1.86,0-3.41-1.28-3.86-3h7.72C13.41,12.72,11.86,14,10,14z M13,9 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C14,8.55,13.55,9,13,9z"/> </g>
        </svg>
    )
}