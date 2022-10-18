import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueDivider } from './Divider.Component';
import { TorqueDividerProps } from './Divider.Types';

export default {
    title: 'TorqueDivider',
    component: TorqueDivider,
    argTypes: {

    },
    args: {

    } as TorqueDividerProps
}

const Divider: ComponentStory<typeof TorqueDivider> = (args: TorqueDividerProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <TorqueDivider {...args} />
    )
}
export const _TorqueDivider = Divider.bind({});