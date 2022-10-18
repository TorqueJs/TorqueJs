import React from 'react';
import { IconProps } from "./Icon.Component";

export const SportsHandball = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M13.23,8.6l-3.46-2c-1.43-0.83-1.93-2.67-1.1-4.1l0.5-0.87L8.3,1.14L7.8,2C6.7,3.92,7.35,6.36,9.27,7.47l-4.5,7.79 l0.87,0.5l1.5-2.6l1.73,1l-3,5.2l0.87,0.5l6-10.39c1.43,0.83,1.93,2.67,1.1,4.1l-0.5,0.87l0.87,0.5l0.5-0.87 C15.8,12.15,15.14,9.71,13.23,8.6z"/> <circle fill={`${props.color}`} cx="11" cy="2" r="1"/> <circle fill={`${props.color}`} cx="12.5" cy="5.5" r="1.5"/> </g> </g>
        </svg>
    )
}
