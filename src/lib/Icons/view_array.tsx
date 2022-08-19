import React from 'react';
import { IconProps } from "./Icon.Component";

export const ViewArray = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color}`} d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"/>
        </svg>
    );
}