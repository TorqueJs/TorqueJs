import React from 'react';
import { IconProps } from "./Icon.Component";

export const BakeryDining = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g> <rect fill="none" height="20" width="20"/> </g> <g> <g> <path fill={`${props.color ? props.color : 'black'}`} d="M3.22,12.34l0.36,0.72c0.14,0.28,0.51,0.37,0.76,0.17L5.9,12l-0.9-1.57c-0.19-0.33-0.66-0.34-0.86-0.02l-0.91,1.44 C3.15,12,3.14,12.18,3.22,12.34z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M4.85,8.75L6.64,12h1.37L7.42,7.51C7.38,7.16,6.99,6.97,6.68,7.14L5.04,8.07C4.8,8.2,4.71,8.51,4.85,8.75z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M16.78,12.34l-0.36,0.72c-0.14,0.28-0.51,0.37-0.76,0.17L14.1,12l0.9-1.57c0.19-0.33,0.66-0.34,0.86-0.02l0.91,1.44 C16.85,12,16.86,12.18,16.78,12.34z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M15.15,8.75L13.36,12h-1.37l0.58-4.49c0.05-0.35,0.43-0.55,0.74-0.37l1.64,0.93C15.2,8.2,15.29,8.51,15.15,8.75z"/> <path fill={`${props.color ? props.color : 'black'}`} d="M8.07,6.56L8.69,12h2.62l0.62-5.44c0.03-0.3-0.2-0.56-0.5-0.56H8.57C8.27,6,8.04,6.26,8.07,6.56z"/> </g> </g>
        </svg>
    )
}
