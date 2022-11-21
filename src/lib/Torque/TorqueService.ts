import { ComponentStyles } from "../Types/ComponentStyles";
import { DefaultThemes, Theme } from "../Types/Theme";
import { defaultLoggingConfig, TorqueLogger, TorqueLogLevel } from "../Utils/Logger";
import { StylesService } from "./StylesService";

class _TorqueService {

    setLogger(logPrefix = '', logConfig = defaultLoggingConfig) {
        TorqueLogger.init(logPrefix, logConfig);
    }

    setTheme(theme: DefaultThemes | Theme, useDefaultLogger = true) {
        if (useDefaultLogger) {
            this.setLogger();
        }
        StylesService.getInstance().init(theme);
    }

    registerTorqueComponent = (component: ComponentStyles): void => {
        StylesService.getInstance().addComponentStyle(component);
    }
}

export const TorqueService = new _TorqueService();