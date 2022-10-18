import React from 'react';
import { IconProps } from "./Icon.Component";

export const FlipCameraAndroid = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M8,10c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2S8,8.9,8,10z"/> <path fill={`${props.color}`} d="M7,7H4.83C5.86,5.21,7.79,4,10,4c2.61,0,4.82,1.67,5.65,4h1.06C15.85,5.11,13.17,3,10,3C7.44,3,5.22,4.39,4,6.44V4H3v4h4 V7z"/> <path fill={`${props.color}`} d="M13,12v1h2.17c-1.04,1.79-2.96,3-5.17,3c-2.61,0-4.82-1.67-5.65-4H3.29c0.86,2.89,3.54,5,6.71,5c2.56,0,4.78-1.39,6-3.44 V16h1v-4H13z"/> </g> </g>
        </svg>
    )
}
