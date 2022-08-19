import React from 'react';
import { IconProps } from "./Icon.Component";

export const SignalCellularNoSim = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${props.fontSize ? props.fontSize : 24}`} viewBox={`0 0 24 24`} width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill={`${props.color}`} d="M-618-2872H782V728H-618zM-1 0h26v24H-1zm1 0h24v24H0z" fill="none"/> <path fill={`${props.color}`} d="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"/> <path fill={`${props.color}`} d="M.01 0h24v24h-24z" fill="none"/>
        </svg>
    )
}