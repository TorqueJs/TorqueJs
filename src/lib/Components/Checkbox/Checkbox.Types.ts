import { ComponentStyles, ComponentStyling, TorqueOnChangeEvent } from "../../Types";
import { IWithBehaviorSubject } from "../../Utils/WithBehaviorSubject";

export interface TorqueCheckboxProps extends IWithBehaviorSubject<ComponentStyles> {
    onChange: TorqueOnChangeEvent;
    themeOverride?: ComponentStyling;
    identifier?: string;
}