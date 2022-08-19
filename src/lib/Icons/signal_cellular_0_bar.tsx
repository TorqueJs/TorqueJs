import React from 'react';
import { IconProps } from "./Icon.Component";

export const SignalCellularZeroBar = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <rect fill={`${props.color}`} fill="none" height="24" width="24"/> <path fill={`${props.color}`} d="M20,6.83V20H6.83L20,6.83 M22,2L2,22h20V2L22,2z"/>
        </svg>
    )
}
