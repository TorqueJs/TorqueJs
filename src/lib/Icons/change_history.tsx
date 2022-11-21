import React from 'react';
import { IconProps } from "./Icon.Component";

export const ChangeHistory = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color ? props.color : 'black'}`} d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"/>
        </svg>
    );
}