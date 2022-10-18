import React from 'react';
import { IconProps } from "./Icon.Component";

export const DomainVerification = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M15,4H5C4.45,4,4,4.45,4,5v10c0,0.55,0.45,1,1,1h10c0.55,0,1-0.45,1-1V5C16,4.45,15.55,4,15,4z M15,15H5V7h10V15z"/> <polygon points="13.18,9.23 12.47,8.53 8.94,12.06 7.53,10.65 6.82,11.35 8.94,13.47"/> </g> </g>
        </svg>
    )
}
