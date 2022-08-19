import React from 'react';
import { IconProps } from "./Icon.Component";

export const CancelScheduleSend = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g><rect fill="none" height="24" width="24"/></g><g><g><path fill={`${props.color}`} d="M16.5,9c-0.42,0-0.83,0.04-1.24,0.11L1.01,3L1,10l9,2l-9,2l0.01,7l8.07-3.46C9.59,21.19,12.71,24,16.5,24 c4.14,0,7.5-3.36,7.5-7.5S20.64,9,16.5,9z M16.5,22c-3.03,0-5.5-2.47-5.5-5.5s2.47-5.5,5.5-5.5s5.5,2.47,5.5,5.5S19.53,22,16.5,22 z"/><polygon fill={`${props.color}`} points="18.27,14.03 16.5,15.79 14.73,14.03 14.03,14.73 15.79,16.5 14.03,18.27 14.73,18.97 16.5,17.21 18.27,18.97 18.97,18.27 17.21,16.5 18.97,14.73"/></g></g>
        </svg>
    );
}