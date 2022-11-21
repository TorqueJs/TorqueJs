import React from 'react';
import { IconProps } from "./Icon.Component";

export const SportsKabaddi = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <circle fill={`${props.color ? props.color : 'black'}`} cx="13.5" cy="2.5" r="1.5"/> <path fill={`${props.color ? props.color : 'black'}`} d="M12,10.34c-0.81-0.06-1.53-0.32-2.17-0.78l0,0C9.6,9.4,9.38,9.22,9.17,9.01L7.29,7.12c-0.39-0.39-1.02-0.39-1.41,0 L3.07,9.91c-0.22,0.22-0.32,0.52-0.29,0.82l0.42,3.75l-2.75,2.75l0.71,0.71l3.25-3.25l0.04-2L6,14.03L6,18h1v-4.69l-1.96-2.05 l2.51-2.51l0.9,0.9c1.02,1.02,2.13,1.62,3.56,1.69V10.34z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M9.5,6.99c0.82,0,1.5-0.68,1.5-1.5c0-0.77-0.59-1.38-1.34-1.47C9.61,4.01,9.56,3.99,9.5,3.99C8.68,3.99,8,4.66,8,5.49 C8,5.67,8.05,5.84,8.11,6C8.32,6.57,8.86,6.99,9.5,6.99z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M19,9.53V6.18l-3.85-1.53c-0.18-0.08-0.37-0.11-0.56-0.11c-0.5,0-0.96,0.25-1.23,0.68l-0.82,1.32 C12,7.46,11.11,8.15,10.08,8.47c0.24,0.21,0.48,0.39,0.74,0.53c0.06,0.03,0.15,0.08,0.26,0.15c0.73-0.34,1.38-0.82,1.91-1.42 l0.44-0.51l0.67,3.33L12,12.24V18h1v-4.8l2.59-2.16L17.16,18h1.08L15.87,6.09L18,6.81v2.72H19z"/> </g> </g>
        </svg>
    )
}
