import { ComponentStyling, TorqueOnClickEvent } from "../../Types";

export interface TorqueBoxProps {
    identifier?: string;
    themeOverride?: ComponentStyling;
    onClick?: TorqueOnClickEvent;
}