import React from 'react';
import { IconProps } from "./Icon.Component";

export const WrongLocation = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M12,8V4.37C11.37,4.13,10.69,4,10,4C7.06,4,4.4,6.25,4.4,9.74c0,2.32,1.87,5.08,5.6,8.26c3.73-3.18,5.6-5.94,5.6-8.26 c0-0.62-0.09-1.2-0.24-1.74H12z M10,11c-0.83,0-1.5-0.67-1.5-1.5S9.17,8,10,8s1.5,0.67,1.5,1.5S10.83,11,10,11z"/> <polygon points="17.47,3.23 16.77,2.53 15,4.29 13.23,2.53 12.53,3.23 14.29,5 12.53,6.77 13.23,7.47 15,5.71 16.77,7.47 17.47,6.77 15.71,5"/> </g> </g>
        </svg>
    )
}
