import { ComponentAttributes, ComponentStyles, ComponentStyling, ComponentType } from "../Types/ComponentStyles";
import { 
    TorqueButtonRequiredAttributeNames, 
    TorqueCheckboxRequiredAttributeNames 
} from '../Types/ComponentRequiredAttributes';
import { DefaultThemes, Theme, TorqueButtonAttributes } from "../Types/Theme";
import { BehaviorSubject } from "../Utils/BehaviorSubject";
import { CeruleanTheme } from "../Themes/Cerulean/defaults.config";

export class StylesService {

    private static instance: StylesService;
    private hasInitialized: boolean;
    private componentStyles: ComponentStyles[] = [];
    private customStyles: ComponentStyles[] = [];
    primary: string;
    secondary: string;
    ternary: string;

    torqueButtonSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_BUTTON, attributes: { styles: <any>{} } });
    torqueCheckboxSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_CHECKBOX, attributes: { styles: <any>{} } });

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
            console.warn(`Please initialize a theme using 'TorqueService.setTheme()' before adding custom component attribute styles as they will be overriden by the theme initialization.`);
            return;
        }

        const hasAllRequiredProps = this.verifyRequiredPropsForGivenComponentType(componentStyle);
        if (hasAllRequiredProps.valid) {
            const componentIndex = this.componentStyles.findIndex((s: ComponentStyles) => s.component === componentStyle.component);
            if (componentIndex === -1) {
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
            console.warn(`Component of type ${componentStyle.component} could not be added to the registry because it is either missing required props or the props given were invalid. Invalid Props were: ${hasAllRequiredProps.invalidProps.join(', ')}.`);
        }
    }

    getComponentStyle = (type: ComponentType): ComponentStyles => {
        const style = this.componentStyles.find((styles: ComponentStyles) => styles.component === type);
        if (!style) {
            console.warn(`Theme not initialized correctly. Please call 'TorqueService.setTheme()' to initialize the Torque Styles.`);
            // TODO: FALLBACK to a default of default themes.
            return { component: type, attributes: { styles: <any>{}}}
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
                    console.warn(`Could not find style attributes for component ${identifier}. Please make sure either the identifier exists for the specific component or select a component by an identifier that exists.`);
                    return { styles: { default: {} } } as ComponentAttributes;
                }
            } else {
                return componentStyles.attributes[identifier];
            }
        } else {
            return componentStyles.attributes;
        }
    }

    getAllPseudoClasses = (styles: ComponentStyling, overrides: ComponentStyling): any => {
        return {
            '&&:focus': {
                ...styles.focus,
                ...overrides.focus
            },
            '&&:hover': {
                ...styles.hover,
                ...overrides.hover
            },
            '&&:active': {
                ...styles.active,
                ...overrides.active
            },
            '&&::before': {
                ...styles.before,
                ...overrides.before
            },
            '&&::after': {
                ...styles.after,
                ...overrides.after
            },
            '&&:first-child': {
                ...styles.firstChild,
                ...overrides.firstChild
            },
            '&&:checked': {
                ...styles.checked,
                ...overrides.checked                
            },
            '&&:disabled': {
                ...styles.disabled,
                ...overrides.disabled                
            },
            '&&:invalid': {
                ...styles.invalid,
                ...overrides.invalid                
            },
            '&&:first-of-type': {
                ...styles.firstOfType,
                ...overrides.firstOfType                
            },
            '&&:last-child': {
                ...styles.lastChild,
                ...overrides.lastChild                
            },
            '&&:last-of-type': {
                ...styles.lastOfType,
                ...overrides.lastOfType                
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
                }
            }
        }

        this.primary = selectedTheme.primaryColor;
        this.secondary = selectedTheme.secondaryColor;
        this.ternary = selectedTheme.ternaryColor ? selectedTheme.ternaryColor : '';

        Object.keys(selectedTheme).forEach((value: string) => {
            switch (value) {
                case ComponentType.TORQUE_BUTTON: {
                    this.addComponentStyle({ component: ComponentType.TORQUE_BUTTON, attributes: <TorqueButtonAttributes>selectedTheme[value] })
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
                        if (!Object.keys(attribs.styles.default).includes(value)) {
                            result.invalidProps.push(value);
                            result.valid = false;
                        }
                    })
                } else {
                    if (!Object.keys(componentStyle.attributes.styles.default).includes(value)) {
                        result.invalidProps.push(value);
                        result.valid = false;
                    }
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
            default: {
                console.error(`Type not found for prop verification.`);
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
        }
    }
}