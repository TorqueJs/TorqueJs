import { ComponentStyles } from "../Types/ComponentStyles";
import { DefaultThemes } from "../Types/Theme";
import { StylesService } from "./StylesService";

class _TorqueService {

    setTheme(theme: DefaultThemes) {
        StylesService.getInstance().init(theme);
    }

    registerTorqueComponent = (component: ComponentStyles): void => {
        StylesService.getInstance().addComponentStyle(component);
    }
}

export const TorqueService = new _TorqueService();