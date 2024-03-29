import React from 'react';
import { IconProps } from "./Icon.Component";

export const SignalCellularAlt = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z"/>
        </svg>
    )
}
