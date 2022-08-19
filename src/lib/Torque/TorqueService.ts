import { ComponentStyles } from "../Types/ComponentStyles";
import { DefaultThemes, Theme } from "../Types/Theme";
import { StylesService } from "./StylesService";

class _TorqueService {

    setTheme(theme: DefaultThemes | Theme) {
        StylesService.getInstance().init(theme);
    }

    registerTorqueComponent = (component: ComponentStyles): void => {
        StylesService.getInstance().addComponentStyle(component);
    }
}

export const TorqueService = new _TorqueService();