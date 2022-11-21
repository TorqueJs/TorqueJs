import React from 'react';
import { IconProps } from "./Icon.Component";

export const SignalCellularNull = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z"/>
        </svg>
    )
}
