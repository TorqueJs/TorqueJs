import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueLogger, TorqueLogLevel } from '../../Utils/Logger';
import { TorqueSnackbar } from './Snackbar.Component';
import { TorqueSnackbarProps } from './Snackbar.Types';

export default {
    title: 'TorqueSnackbar',
    component: TorqueSnackbar,
    argTypes: {

    },
    args: {

    } as TorqueSnackbarProps
}

const Snackbar: ComponentStory<typeof TorqueSnackbar> = (args: TorqueSnackbarProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    TorqueLogger.log('Loading Torque Snackbar', TorqueLogLevel.WARN);
    return (
        <TorqueSnackbar {...args} />
    )
}
export const _TorqueSnackbar = Snackbar.bind({});