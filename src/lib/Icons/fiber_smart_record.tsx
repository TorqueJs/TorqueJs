import React from 'react';
import { IconProps } from "./Icon.Component";

export const FiberSmartRecord = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M24 24H0V0h24v24z" fill="none"/> <g> <circle fill={`${props.color ? props.color : 'black'}`} cx="9" cy="12" r="8"/> <path fill={`${props.color ? props.color : 'black'}`} d="M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"/> </g>
        </svg>
    )
}
