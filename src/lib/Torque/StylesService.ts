import { ComponentStyles, ComponentType, TorqueButtonAttributes } from "../Types/ComponentStyles";
import { 
    TorqueButtonRequiredAttributeNames, 
    TorqueCheckboxRequiredAttributeNames 
} from '../Types/ComponentRequiredAttributes';
import { DefaultThemes, Theme } from "../Types/Theme";
import { BehaviorSubject } from "../Utils/BehaviorSubject";
import { CeruleanTheme } from "../Themes/Cerulean/defaults.config";

export class StylesService {

    private static instance: StylesService;
    private hasInitialized: boolean;
    private componentStyles: ComponentStyles[] = [];
    private customStyles: ComponentStyles[] = [];

    torqueButtonSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_BUTTON, attributes: {} });
    torqueCheckboxSubject: BehaviorSubject<ComponentStyles> = new BehaviorSubject({ component: ComponentType.TORQUE_CHECKBOX, attributes: {} });

    private constructor() {}

    public static getInstance = (): StylesService => {
        if (!StylesService.instance) {
            StylesService.instance = new StylesService();
        }
        return StylesService.instance;
    }

    init(initialTheme: DefaultThemes) {
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
            console.warn(`Please initialize a theme using 'TorqueService.setTheme()' before adding custom component attribute styles as they will be overriden by the theme initialization.`)
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
            return { component: type, attributes: {}}
        } else {
            return style;
        }
    }

    private initializeDefaultStyles = (theme: DefaultThemes): void => {
        this.hasInitialized = true;
        let selectedTheme: Theme;
        switch (theme) {
            case DefaultThemes.CERULEAN: {
                selectedTheme = CeruleanTheme;
            }
        }

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
                if (!Object.keys(componentStyle.attributes).includes(value)) {
                    result.invalidProps.push(value);
                    result.valid = false;
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