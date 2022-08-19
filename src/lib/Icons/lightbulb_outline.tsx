import React from 'react';
import { IconProps } from "./Icon.Component";

export const LightbulbOutline = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g><g><g><path fill={`${props.color}`} d="M9,21c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-1H9V21z M12,2C8.14,2,5,5.14,5,9c0,2.38,1.19,4.47,3,5.74V17 c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v-2.26c1.81-1.27,3-3.36,3-5.74C19,5.14,15.86,2,12,2z M14,13.7V16h-4v-2.3 C8.48,12.63,7,11.53,7,9c0-2.76,2.24-5,5-5s5,2.24,5,5C17,11.49,15.49,12.65,14,13.7z"/></g></g></g>
        </svg>
    );
}