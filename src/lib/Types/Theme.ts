import { 
    ComponentAttributes, 
    ComponentStyling, 
    TorqueAccordianConfig, 
    TorqueBoxConfig, 
    TorqueButtonConfig,
    TorqueCardConfig,
    TorqueCheckboxConfig,
    TorqueDatepickerConfig,
    TorqueDividerConfig,
    TorqueInputConfig,
    TorqueMenuConfig,
    TorqueModalConfig,
    TorqueProgressConfig,
    TorqueRadioConfig,
    TorqueSelectInputConfig,
    TorqueSidenavConfig,
    TorqueSlideToggleConfig,
    TorqueSnackbarConfig,
    TorqueSpinnerConfig,
    TorqueTableConfig,
    TorqueTabsConfig,
    TorqueTooltipConfig,
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
    TORQUE_BOX?: TorqueBoxAttributes | TorqueBoxAttributes[];
    TORQUE_ACCORDIAN?: TorqueAccordianAttributes | TorqueAccordianAttributes[];
    TORQUE_CARD?: TorqueCardAttributes | TorqueCardAttributes[];
    TORQUE_DATEPICKER?: TorqueDatepickerAttributes | TorqueDatepickerAttributes[];
    TORQUE_DIVIDER?: TorqueDividerAttributes | TorqueDividerAttributes[];
    TORQUE_INPUT?: TorqueInputAttributes | TorqueInputAttributes[];
    TORQUE_MENU?: TorqueMenuAttributes | TorqueMenuAttributes[];
    TORQUE_MODAL?: TorqueModalAttributes | TorqueModalAttributes[];
    TORQUE_PROGRESS?: TorqueProgressAttributes | TorqueProgressAttributes[];
    TORQUE_RADIO?: TorqueRadioAttributes | TorqueRadioAttributes[];
    TORQUE_SELECT_INPUT?: TorqueSelectInputAttributes | TorqueSelectInputAttributes[];
    TORQUE_SIDENAV?: TorqueSidenavAttributes | TorqueSidenavAttributes[];
    TORQUE_SLIDE_TOGGLE?: TorqueSlideToggleAttributes | TorqueSlideToggleAttributes[];
    TORQUE_SNACKBAR?: TorqueSnackbarAttributes | TorqueSnackbarAttributes[];
    TORQUE_SPINNER?: TorqueSpinnerAttributes | TorqueSpinnerAttributes[];
    TORQUE_TABLE?: TorqueTableAttributes | TorqueTableAttributes[];
    TORQUE_TABS?: TorqueTabsAttributes | TorqueTabsAttributes[];
    TORQUE_TOOLTIP?: TorqueTooltipAttributes | TorqueTooltipAttributes[];
}

export interface TorqueButtonAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config: TorqueButtonConfig;
}

export interface TorqueCheckboxAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueCheckboxConfig;
}

export interface TorqueBoxAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueBoxConfig;
}

export interface TorqueAccordianAttributes extends ComponentAttributes {
    accordianWrapper: {
        styles: ComponentStyling;
    }
    accordianHeader: {
        styles: ComponentStyling;
    }
    accordianContent: {
        styles: ComponentStyling;
    }
    config?: TorqueAccordianConfig;
}

export interface TorqueCardAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueCardConfig;
}

export interface TorqueDatepickerAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueDatepickerConfig;
}

export interface TorqueDividerAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueDividerConfig;
}

export interface TorqueInputAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueInputConfig;
}

export interface TorqueMenuAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueMenuConfig;
}

export interface TorqueModalAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueModalConfig;
}

export interface TorqueProgressAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueProgressConfig;
}

export interface TorqueRadioAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueRadioConfig;
}

export interface TorqueSelectInputAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueSelectInputConfig;
}

export interface TorqueSidenavAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueSidenavConfig;
}

export interface TorqueSlideToggleAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueSlideToggleConfig;
}

export interface TorqueSnackbarAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueSnackbarConfig;
}

export interface TorqueSpinnerAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueSpinnerConfig;
}

export interface TorqueTableAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueTableConfig;
}

export interface TorqueTabsAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueTabsConfig;
}

export interface TorqueTooltipAttributes extends ComponentAttributes {
    styles: ComponentStyling;
    config?: TorqueTooltipConfig;
}