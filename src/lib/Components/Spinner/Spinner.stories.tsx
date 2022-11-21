import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueLogger, TorqueLogLevel } from '../../Utils/Logger';
import { TorqueSpinner } from './Spinner.Component';
import { TorqueSpinnerProps } from './Spinner.Types';

export default {
    title: 'TorqueSpinner',
    component: TorqueSpinner,
    argTypes: {

    },
    args: {

    } as TorqueSpinnerProps
}

const Spinner: ComponentStory<typeof TorqueSpinner> = (args: TorqueSpinnerProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    TorqueLogger.log('Loading Torque Spinner', TorqueLogLevel.WARN);
    return (
        <TorqueSpinner {...args} />
    )
}
export const _TorqueSpinner = Spinner.bind({});