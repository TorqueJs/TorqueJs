import React from 'react';
import { IconProps } from "./Icon.Component";

export const SendToMobile = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <rect fill="none" height="24" width="24"/> <path fill={`${props.color ? props.color : 'black'}`} d="M17,17h2v4c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V3c0-1.1,0.9-1.99,2-1.99L17,1c1.1,0,2,0.9,2,2v4h-2V6H7v12h10V17z M22,12 l-4-4v3h-5v2h5v3L22,12z"/>
        </svg>
    )
}
