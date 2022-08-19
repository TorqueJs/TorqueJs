import React from 'react';
import { IconProps } from "./Icon.Component";

export const TransitEnterexit = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color}`} d="M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3z"/>
        </svg>
    )
}
