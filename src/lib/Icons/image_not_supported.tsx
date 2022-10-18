import React from 'react';
import { IconProps } from "./Icon.Component";

export const ImageNotSupported = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20" y="0"/> <g> <path fill={`${props.color}`} d="M5.41,4H15c0.55,0,1,0.45,1,1v9.59L5.41,4z M16.36,17.78L14.59,16H5c-0.55,0-1-0.45-1-1V5.41L2.22,3.64l0.71-0.71 l14.14,14.14L16.36,17.78z M12.59,14l-2.18-2.18l-1.05,1.32L8,11.33L6,14H12.59z"/> </g> </g>
        </svg>
    )
}
