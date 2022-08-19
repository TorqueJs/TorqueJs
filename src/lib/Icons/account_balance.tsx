import React from 'react';
import { IconProps } from "./Icon.Component";

export const AccountBalance = (props: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height={`${props.fontSize ? props.fontSize : 24}`} viewBox="0 0 24 24" width={`${props.fontSize ? props.fontSize : 24}`}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <g>
                <rect fill="none" height="24" width="24"/>
            </g>
            <g>
                <g>
                    <rect fill={`${props.color}`} height="7" width="3" x="4" y="10"/>
                    <rect fill={`${props.color}`} height="7" width="3" x="10.5" y="10"/>
                    <rect fill={`${props.color}`} height="3" width="20" x="2" y="19"/>
                    <rect fill={`${props.color}`} height="7" width="3" x="17" y="10"/>
                    <polygon fill={`${props.color}`} points="12,1 2,6 2,8 22,8 22,6"/>
                </g>
            </g>
        </svg>
    );
}