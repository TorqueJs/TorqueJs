import React from 'react';
import { IconProps } from "./Icon.Component";

export const PersonSearch = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M10.14,10.93C7.85,10.59,4,11.52,4,13.21V15h5.35C8.73,13.7,8.93,12.05,10.14,10.93z"/> <circle fill={`${props.color ? props.color : 'black'}`} cx="9" cy="7.5" r="2.5"/> <path fill={`${props.color ? props.color : 'black'}`} d="M16.06,16.35l-1.48-1.48c0.26-0.4,0.42-0.87,0.42-1.38c0-1.38-1.12-2.5-2.5-2.5S10,12.12,10,13.5c0,1.38,1.12,2.5,2.5,2.5 c0.51,0,0.98-0.15,1.38-0.42l1.48,1.48L16.06,16.35z M12.5,15c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5 S13.33,15,12.5,15z"/> </g> </g>
        </svg>
    )
}
