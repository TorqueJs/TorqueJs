import React from 'react';
import { IconProps } from "./Icon.Component";

export const FlipCameraIos = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M16,5h-2l-2-2H8L6,5H4C3.45,5,3,5.45,3,6v9c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1V6C17,5.45,16.55,5,16,5z M10,14 c-2.21,0-4-1.79-4-4H4.5l2-2l2,2H7c0,1.65,1.35,3,3,3c0.44,0,0.85-0.1,1.23-0.27l0.73,0.73C11.38,13.8,10.72,14,10,14z M13.5,12 l-2-2H13c0-1.65-1.35-3-3-3C9.56,7,9.15,7.1,8.77,7.27L8.04,6.54C8.62,6.2,9.28,6,10,6c2.21,0,4,1.79,4,4h1.5L13.5,12z"/> </g> </g>
        </svg>
    )
}
