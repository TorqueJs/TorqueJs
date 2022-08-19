import React from 'react';
import { IconProps } from "./Icon.Component";

export const HearingDisabled = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill={`${props.color}`} fill="none" height="20" width="20"/> <path fill={`${props.color}`} d="M11,8c0,0.45-0.15,0.85-0.4,1.19L7.81,6.4C8.15,6.15,8.55,6,9,6C10.1,6,11,6.9,11,8z M17.07,17.07L2.93,2.93L2.22,3.64 l2.27,2.27C4.19,6.54,4,7.25,4,8h1c0-0.47,0.09-0.92,0.24-1.34l1.82,1.82C7.24,9.2,7.8,9.76,8.52,9.94l2.1,2.1c0,0,0,0,0,0 c-0.6,0.46-1.23,0.93-1.56,1.92c-0.39,1.16-0.81,1.58-1.42,1.9C7.42,15.95,7.17,16,6.92,16c-0.65,0-1.26-0.42-1.62-1H4.2 c0.42,1.12,1.5,2,2.72,2c0.4,0,0.8-0.08,1.16-0.24c0.96-0.5,1.51-1.21,1.93-2.49c0.23-0.69,0.64-1,1.21-1.43 c0.04-0.03,0.07-0.06,0.11-0.09l5.03,5.03L17.07,17.07z M9.04,4C11.26,4,13,5.71,13,7.9c0,0.72-0.22,1.51-0.63,2.24 c-0.1,0.19-0.21,0.34-0.32,0.49l0.72,0.72c0.16-0.22,0.32-0.45,0.47-0.72C13.73,9.75,14,8.78,14,7.9C14,5.15,11.83,3,9.04,3 C7.75,3,6.59,3.5,5.7,4.29l0.71,0.71C7.12,4.38,8.03,4,9.04,4z M16,8c0-2.19-1-4.14-2.58-5.42l-0.72,0.72C14.1,4.39,15,6.09,15,8 c0,1.55-0.6,2.95-1.57,4.02l0.71,0.71C15.29,11.48,16,9.83,16,8z"/> </g>
        </svg>
    )
}
