import React from 'react';
import { IconProps } from "./Icon.Component";

export const CalendarViewDay = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color}`} d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z"/>
        </svg>
    );
}