import { 
    ComponentAttributes, 
    ComponentStyling, 
    TorqueButtonConfig,
    TorqueCheckboxConfig,
} from "./ComponentStyles";

export enum DefaultThemes {
    CERULEAN
}

export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    ternaryColor?: string;
    TORQUE_BUTTON?: TorqueButtonAttributes | TorqueButtonAttributes[];
    TORQUE_CHECKBOX?: TorqueCheckboxAttributes | TorqueCheckboxAttributes[];
}

export interface TorqueButtonAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config: TorqueButtonConfig;
}

export interface TorqueCheckboxAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config: TorqueCheckboxConfig;
}