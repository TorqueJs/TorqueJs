import { 
    TorqueButtonAttributes, 
    TorqueCheckboxAttributes 
} from "./ComponentStyles";

export enum DefaultThemes {
    CERULEAN
}

export interface Theme {
    TORQUE_BUTTON: TorqueButtonAttributes;
    TORQUE_CHECKBOX: TorqueCheckboxAttributes;
}