import React from 'react';
import { IconProps } from "./Icon.Component";

export const Outbond = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color}`} d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13.88,11.54l-4.96,4.96l-1.41-1.41 l4.96-4.96L10.34,8l5.65,0.01L16,13.66L13.88,11.54z"/>
        </svg>
    );
}