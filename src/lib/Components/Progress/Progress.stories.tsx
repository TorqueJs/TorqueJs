import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueLogger, TorqueLogLevel } from '../../Utils/Logger';
import { TorqueProgress } from './Progress.Component';
import { TorqueProgressProps } from './Progress.Types';

export default {
    title: 'TorqueProgress',
    component: TorqueProgress,
    argTypes: {

    },
    args: {

    } as TorqueProgressProps
}

const Progress: ComponentStory<typeof TorqueProgress> = (args: TorqueProgressProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    TorqueLogger.log('Loading Torque Progress', TorqueLogLevel.WARN);
    return (
        <TorqueProgress {...args} />
    )
}
export const _TorqueProgress = Progress.bind({});