import { 
    ComponentAttributePossibilities,
    ComponentAttributes, 
    ComponentStyles, 
    ComponentStyling, 
    ComponentType, 
    TorqueCSSObject 
} from "../Types/ComponentStyles";
import { 
    TorqueAccordianRequiredAttributeNames,
    TorqueBoxRequiredAttributeNames,
    TorqueButtonRequiredAttributeNames, 
    TorqueCardRequiredAttributeNames, 
    TorqueCheckboxRequiredAttributeNames,
    TorqueDatepickerRequiredAttributeNames,
    TorqueDividerRequiredAttributeNames,
    TorqueInputRequiredAttributeNames,
    TorqueMenuRequiredAttributeNames,
    TorqueModalRequiredAttributeNames,
    TorqueProgressRequiredAttributeNames,
    TorqueRadioRequiredAttributeNames,
    TorqueSelectInputRequiredAttributeNames,
    TorqueSidenavRequiredAttributeNames,
    TorqueSlideToggleRequiredAttributeNames,
    TorqueSnackbarRequiredAttributeNames,
    TorqueSpinnerRequiredAttributeNames,
    TorqueTableRequiredAttributeNames,
    TorqueTabsRequiredAttributeNames,
    TorqueTooltipsRequiredAttributeNames
} from '../Types/ComponentRequiredAttributes';
import { 
    DefaultThemes, 
    Theme, 
    TorqueAccordianAttributes, 
    TorqueBoxAttributes, 
    TorqueButtonAttributes, 
    TorqueCardAttributes, 
    TorqueCheckboxAttributes, 
    TorqueDatepickerAttributes, 
    TorqueDividerAttributes, 
    TorqueInputAttributes, 
    TorqueMenuAttributes, 
    TorqueModalAttributes, 
    TorqueProgressAttributes, 
    TorqueRadioAttributes, 
    TorqueSelectInputAttributes, 
    TorqueSidenavAttributes, 
    TorqueSlideToggleAttributes, 
    TorqueSnackbarAttributes, 
    TorqueSpinnerAttributes, 
    TorqueTableAttributes, 
    TorqueTabsAttributes, 
    TorqueTooltipAttributes 
} from "../Types/Theme";
import { BehaviorSubject } from "../Utils/BehaviorSubject";
import { CeruleanTheme } from "../Themes/Cerulean/defaults.config";
import { TorqueLogger, TorqueLogLevel } from "../Utils/Logger";

export class StylesService {

    private static instance: StylesService;
    private hasInitialized: boolean;
    private componentStyles: ComponentStyles[] = [];
    private customStyles: ComponentStyles[] = [];
    primary: string;
    secondary: string;
    ternary: string;

    torqueButtonSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_BUTTON, attributes: { } });
    torqueCheckboxSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_CHECKBOX, attributes: { } });
    torqueBoxSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_BOX, attributes: { } });
    torqueAccordianSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_ACCORDIAN, attributes: { } });
    torqueCardSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_CARD, attributes: { } });
    torqueDatepickerSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_DATEPICKER, attributes: { } });
    torqueDividerSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_DIVIDER, attributes: { } });
    torqueInputSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_INPUT, attributes: { } });
    torqueMenuSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_MENU, attributes: { } });
    torqueModalSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_MODAL, attributes: { } });
    torqueProgressSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_PROGRESS, attributes: { } });
    torqueRadioSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_RADIO, attributes: { } });
    torqueSelectInputSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_SELECT_INPUT, attributes: { } });
    torqueSidenavSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_SIDENAV, attributes: { } });
    torqueSlideToggleSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_SLIDE_TOGGLE, attributes: { } });
    torqueSnackbarSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_SNACKBAR, attributes: { } });
    torqueSpinnerSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_SPINNER, attributes: { } });
    torqueTableSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_TABLE, attributes: { } });
    torqueTabsSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_TABS, attributes: { } });
    torqueTooltipSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_TOOLTIP, attributes: { } });

    private constructor() {}

    public static getInstance = (): StylesService => {
        if (!StylesService.instance) {
            StylesService.instance = new StylesService();
        }
        return StylesService.instance;
    }

    init(initialTheme: DefaultThemes | Theme) {
        if (!this.hasInitialized) {
            this.initializeDefaultStyles(initialTheme);
        } else {
            this.componentStyles = [];
            this.initializeDefaultStyles(initialTheme);
            this.customStyles.forEach((style: ComponentStyles) => this.addComponentStyle(style));
        }
    }

    addComponentStyle = (componentStyle: ComponentStyles) => {
        if (!this.hasInitialized) {
            TorqueLogger.log(`Please initialize a theme using 'TorqueService.setTheme()' before adding custom component attribute styles as they will be overriden by the theme initialization.`, TorqueLogLevel.ERROR);
            return;
        }

        const hasAllRequiredProps = this.verifyRequiredPropsForGivenComponentType(componentStyle);
        if (hasAllRequiredProps.valid) {
            const componentIndex = this.componentStyles.findIndex((s: ComponentStyles) => s.component === componentStyle.component);
            if (componentIndex === -1) {
                TorqueLogger.log(`Adding ${componentStyle.component} to current styles`, TorqueLogLevel.INFO);
                this.componentStyles.push(componentStyle);
                this.customStyles.push(componentStyle);
            } else {
                this.componentStyles.splice(componentIndex, 1, componentStyle);
                const customIndex = this.customStyles.findIndex((s: ComponentStyles) => s.component === componentStyle.component);
                if (customIndex === -1) {
                    this.customStyles.splice(customIndex, 1, componentStyle);
                }
            }
            this.updateSubjects(componentStyle);
        } else {
            TorqueLogger.log(`Component of type ${componentStyle.component} could not be added to the registry because it is either missing required props or the props given were invalid. Invalid Props were: ${hasAllRequiredProps.invalidProps.join(', ')}.`, TorqueLogLevel.ERROR);
        }
    }

    getComponentStyle = (type: ComponentType): ComponentStyles => {
        const style = this.componentStyles.find((styles: ComponentStyles) => styles.component === type);
        if (!style) {
            TorqueLogger.log(`Theme not initialized correctly. Missing style configuration for ${type.toString()}`, TorqueLogLevel.ERROR);
            // TODO: FALLBACK to a default of default themes.
            return { component: type, attributes: { }}
        } else {
            return style;
        }
    }

    getAttributesByIdentifier = (componentStyles: ComponentStyles, identifier: string | number = 0): ComponentAttributes => {
        if (Array.isArray(componentStyles.attributes)) {
            if (typeof identifier === 'string') {
                let identifiedAttributes: ComponentAttributes | undefined = componentStyles.attributes.find((attribs: ComponentAttributes) => attribs.identifier === identifier);
                if (identifiedAttributes) {
                    return identifiedAttributes;
                } else {
                    TorqueLogger.log(`Could not find style attributes for component ${identifier}. Please make sure either the identifier exists for the specific component or select a component by an identifier that exists.`, TorqueLogLevel.ERROR);
                    return { styles: { default: {} } } as ComponentAttributes;
                }
            } else {
                return componentStyles.attributes[identifier];
            }
        } else {
            return componentStyles.attributes;
        }
    }

    turnStylesIntoCSSString = (value: TorqueCSSObject | TorqueCSSObject[]): string => {
        if (!value) return '';
        const kebabize = (str: string) => {
            return str.split('').map((letter, idx) => {
              return letter.toUpperCase() === letter
               ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
               : letter;
            }).join('');
        }
        if (Array.isArray(value)) {
            return value.map((obj) => { return Object.keys(obj).map((key) => {
                if (typeof obj[key] === 'object') {
                    return `${key} {${this.turnStylesIntoCSSString(obj[key])}}`
                } else {
                    return `${kebabize(key)}:${obj[key]};`
                }
            }).join('')}).join('')
        }
        return Object.keys(value).map((key) => {
            if (typeof value[key] === 'object') {
                return `${key} {${this.turnStylesIntoCSSString(value[key])}}`
            } else {
                return `${kebabize(key)}:${value[key]};`
            }
        }).join('');
    }

    getAllPseudoClasses = (styles: ComponentStyling, overrides: ComponentStyling): any => {
        
        return {
            '&&:focus': {
                ...styles?.focus,
                ...overrides?.focus
            },
            '&&:hover': {
                ...styles?.hover,
                ...overrides?.hover
            },
            '&&:active': {
                ...styles?.active,
                ...overrides?.active
            },
            '&&::before': {
                ...styles?.before,
                ...overrides?.before
            },
            '&&::after': {
                ...styles?.after,
                ...overrides?.after
            },
            '&&:first-child': {
                ...styles?.firstChild,
                ...overrides?.firstChild
            },
            '&&:checked': {
                ...styles?.checked,
                ...overrides?.checked                
            },
            '&&:disabled': {
                ...styles?.disabled,
                ...overrides?.disabled                
            },
            '&&:invalid': {
                ...styles?.invalid,
                ...overrides?.invalid                
            },
            '&&:first-of-type': {
                ...styles?.firstOfType,
                ...overrides?.firstOfType                
            },
            '&&:last-child': {
                ...styles?.lastChild,
                ...overrides?.lastChild                
            },
            '&&:last-of-type': {
                ...styles?.lastOfType,
                ...overrides?.lastOfType                
            },
        }
    }

    private initializeDefaultStyles = (theme: DefaultThemes | Theme): void => {
        this.hasInitialized = true;
        let selectedTheme: Theme = <Theme>theme;
        if (typeof theme === 'number') {
            switch (theme) {
                case DefaultThemes.CERULEAN: {
                    selectedTheme = CeruleanTheme;
                    TorqueLogger.log(`Initializing the Cerulean Theme.`, TorqueLogLevel.INFO);
                    break;
                }
            }
        }

        this.primary = selectedTheme.primaryColor;
        this.secondary = selectedTheme.secondaryColor;
        this.ternary = selectedTheme.ternaryColor ? selectedTheme.ternaryColor : '';

        Object.keys(selectedTheme).forEach((value: string) => {
            switch (value) {
                case ComponentType.TORQUE_BUTTON: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_BUTTON, attributes: <TorqueButtonAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_BOX: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_BOX, attributes: <TorqueBoxAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_CHECKBOX: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_CHECKBOX, attributes: <TorqueCheckboxAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_ACCORDIAN: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_ACCORDIAN, attributes: <TorqueAccordianAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_CARD: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_CARD, attributes: <TorqueCardAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_DATEPICKER: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_DATEPICKER, attributes: <TorqueDatepickerAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_DIVIDER: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_DIVIDER, attributes: <TorqueDividerAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_INPUT: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_INPUT, attributes: <TorqueInputAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_MENU: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_MENU, attributes: <TorqueMenuAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_MODAL: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_MODAL, attributes: <TorqueModalAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_PROGRESS: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_PROGRESS, attributes: <TorqueProgressAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_RADIO: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_RADIO, attributes: <TorqueRadioAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_SELECT_INPUT: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_SELECT_INPUT, attributes: <TorqueSelectInputAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_SIDENAV: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_SIDENAV, attributes: <TorqueSidenavAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_SLIDE_TOGGLE: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_SLIDE_TOGGLE, attributes: <TorqueSlideToggleAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_SNACKBAR: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_SNACKBAR, attributes: <TorqueSnackbarAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_SPINNER: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_SPINNER, attributes: <TorqueSpinnerAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_TABLE: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_TABLE, attributes: <TorqueTableAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_TABS: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_TABS, attributes: <TorqueTabsAttributes>selectedTheme[value] });
                    break;
                }
                case ComponentType.TORQUE_TOOLTIP: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_TOOLTIP, attributes: <TorqueTooltipAttributes>selectedTheme[value] });
                    break;
                }
                case 'primaryColor':
                case 'secondaryColor':
                case 'ternaryColor': {
                    break;
                }
                default: {
                    TorqueLogger.log(`Found Value: ${value}, which is not setup to be added as a component`, TorqueLogLevel.WARN);
                    break;
                }
            }
        });
    }

    private verifyRequiredPropsForGivenComponentType = (componentStyle: ComponentStyles): { valid: boolean; invalidProps: Array<string>} => {
        let result: {valid: boolean; invalidProps: string[]} = { valid: true, invalidProps: [] };
        const extractInvalidAttributes = (obj: string[]): void => {
            obj.forEach((value: string) => {
                if (Array.isArray(componentStyle.attributes)) {
                    componentStyle.attributes.forEach((attribs: ComponentAttributes) => {
                        ComponentAttributePossibilities.forEach((option: string) => {
                            if (attribs[option] && !Object.keys(attribs[value].default).includes(value)) {
                                result.invalidProps.push(value);
                                result.valid = false;
                            }
                        });
                    })
                } else {
                    ComponentAttributePossibilities.forEach((option: string) => {
                        if (componentStyle.attributes[option] && !Object.keys(componentStyle.attributes[option].default).includes(value)) {
                            result.invalidProps.push(value);
                            result.valid = false;
                        }
                    });
                }
            });
        }
        switch (componentStyle.component) {
            case ComponentType.TORQUE_BUTTON: {
                extractInvalidAttributes(TorqueButtonRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_CHECKBOX: {
                extractInvalidAttributes(TorqueCheckboxRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_BOX: {
                extractInvalidAttributes(TorqueBoxRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_ACCORDIAN: {
                extractInvalidAttributes(TorqueAccordianRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_CARD: {
                extractInvalidAttributes(TorqueCardRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_DATEPICKER: {
                extractInvalidAttributes(TorqueDatepickerRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_DIVIDER: {
                extractInvalidAttributes(TorqueDividerRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_INPUT: {
                extractInvalidAttributes(TorqueInputRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_MENU: {
                extractInvalidAttributes(TorqueMenuRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_MODAL: {
                extractInvalidAttributes(TorqueModalRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_PROGRESS: {
                extractInvalidAttributes(TorqueProgressRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_RADIO: {
                extractInvalidAttributes(TorqueRadioRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_SELECT_INPUT: {
                extractInvalidAttributes(TorqueSelectInputRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_SIDENAV: {
                extractInvalidAttributes(TorqueSidenavRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_SLIDE_TOGGLE: {
                extractInvalidAttributes(TorqueSlideToggleRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_SNACKBAR: {
                extractInvalidAttributes(TorqueSnackbarRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_SPINNER: {
                extractInvalidAttributes(TorqueSpinnerRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_TABLE: {
                extractInvalidAttributes(TorqueTableRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_TABS: {
                extractInvalidAttributes(TorqueTabsRequiredAttributeNames);
                break;
            }
            case ComponentType.TORQUE_TOOLTIP: {
                extractInvalidAttributes(TorqueTooltipsRequiredAttributeNames);
                break;
            }
            default: {
                TorqueLogger.log(`Type not found for prop verification.`, TorqueLogLevel.CRITICAL);
            }
        }
        return result;
    }

    private updateSubjects = (componentStyle: ComponentStyles) => {
        switch (componentStyle.component) {
            case ComponentType.TORQUE_BUTTON: {
                this.torqueButtonSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_CHECKBOX: {
                this.torqueCheckboxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_BOX: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_ACCORDIAN: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_CARD: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_DATEPICKER: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_DIVIDER: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_INPUT: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_MENU: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_MODAL: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_PROGRESS: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_RADIO: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_SELECT_INPUT: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_SIDENAV: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_SLIDE_TOGGLE: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_SNACKBAR: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_SPINNER: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_TABLE: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_TABS: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            case ComponentType.TORQUE_TOOLTIP: {
                this.torqueBoxSubject.next(componentStyle);
                break;
            }
            default: {
                TorqueLogger.log(`Found component, ${componentStyle.component}, which needs to have its subscription updated.`, TorqueLogLevel.ERROR);
                break;
            }
        }
    }
}