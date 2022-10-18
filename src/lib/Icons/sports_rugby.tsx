import React from 'react';
import { IconProps } from "./Icon.Component";

export const SportsRugby = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color}`} d="M15.3,4.7C15.3,4.7,15.3,4.7,15.3,4.7C15.3,4.7,15.3,4.7,15.3,4.7c-0.35-0.35-1.34-0.6-2.6-0.6 c-1.93,0-4.47,0.6-6.24,2.37C3.54,9.39,3.81,14.42,4.7,15.3c0.35,0.35,1.34,0.6,2.6,0.6c1.93,0,4.47-0.6,6.24-2.37 C16.46,10.61,16.19,5.58,15.3,4.7z M7.17,7.17C8.79,5.55,11,5.19,12.16,5.12C10.8,5.64,9.23,6.53,7.88,7.88 c-1.35,1.35-2.24,2.92-2.76,4.28C5.22,10.58,5.75,8.6,7.17,7.17z M12.83,12.83c-1.62,1.62-3.83,1.98-4.99,2.06 c1.35-0.52,2.93-1.41,4.28-2.76c1.35-1.35,2.24-2.92,2.76-4.28C14.78,9.42,14.25,11.4,12.83,12.83z"/> </g> </g>
        </svg>
    )
}
