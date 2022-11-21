import React from 'react';
import { IconProps } from "./Icon.Component";

export const BubbleChart = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <circle fill={`${props.color ? props.color : 'black'}`} cx="7.2" cy="14.4" r="3.2"/> <circle fill={`${props.color ? props.color : 'black'}`} cx="14.8" cy="18" r="2"/> <circle fill={`${props.color ? props.color : 'black'}`} cx="15.2" cy="8.8" r="4.8"/>
        </svg>
    )
}
