import React from 'react';
import { IconProps } from "./Icon.Component";

export const ArrowRightAlt = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/>
        </svg>
    );
}