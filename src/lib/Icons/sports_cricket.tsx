import React from 'react';
import { IconProps } from "./Icon.Component";

export const SportsCricket = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <circle fill={`${props.color ? props.color : 'black'}`} cx="14.5" cy="5.5" r="2.5"/> <path fill={`${props.color ? props.color : 'black'}`} d="M12.34,11.51L5.97,5.15c-0.2-0.2-0.51-0.2-0.71,0L3.15,7.26c-0.2,0.2-0.2,0.51,0,0.71l6.36,6.36c0.2,0.2,0.51,0.2,0.71,0 l2.12-2.12C12.53,12.02,12.53,11.71,12.34,11.51z"/> <rect fill={`${props.color ? props.color : 'black'}`} height="4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.9645 13.9853)" width="1" x="12.9" y="13.4"/> </g> </g>
        </svg>
    )
}
