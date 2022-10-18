import React from 'react';
import { IconProps } from "./Icon.Component";

export const FiberManualRecord = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M24 24H0V0h24v24z" fill="none"/> <circle fill={`${props.color}`} cx="12" cy="12" r="8"/>
        </svg>
    )
}
