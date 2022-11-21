import { ComponentStyles, ComponentStyling, TorqueOnClickEvent } from "../../Types";
import { IWithBehaviorSubject } from "../../Utils/WithBehaviorSubject";

export interface TorqueBoxProps extends IWithBehaviorSubject<ComponentStyles> {
    identifier?: string;
    themeOverride?: ComponentStyling;
    onClick?: TorqueOnClickEvent;
}