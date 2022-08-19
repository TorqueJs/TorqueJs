import React from 'react';
import { IconProps } from "./Icon.Component";

export const AppRegistration = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> </g> <g> <g> <rect fill={`${props.color}`} height="3" width="3" x="8.5" y="4"/> <rect fill={`${props.color}`} height="3" width="3" x="4" y="13"/> <rect fill={`${props.color}`} height="3" width="3" x="4" y="8.5"/> <rect fill={`${props.color}`} height="3" width="3" x="4" y="4"/> <path fill={`${props.color}`} d="M16.41,9.47l-0.88-0.88c-0.12-0.12-0.32-0.12-0.44,0l-0.66,0.66l1.31,1.31l0.66-0.66C16.53,9.78,16.53,9.59,16.41,9.47z"/> <polygon points="9,14.69 9,16 10.31,16 15.31,11 14,9.69"/> <polygon points="11.5,10.77 11.5,8.5 8.5,8.5 8.5,11.5 10.77,11.5"/> <rect fill={`${props.color}`} height="3" width="3" x="13" y="4"/> </g> </g>
        </svg>
    )
}
