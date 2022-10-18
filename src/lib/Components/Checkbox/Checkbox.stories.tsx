import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueCheckbox } from './Checkbox.Component';
import { TorqueCheckboxProps } from './Checkbox.Types';

export default {
    title: 'TorqueCheckbox',
    component: TorqueCheckbox,
    argTypes: {

    },
    args: {

    } as TorqueCheckboxProps
}

const Checkbox: ComponentStory<typeof TorqueCheckbox> = (args: TorqueCheckboxProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <TorqueCheckbox {...args} />
    )
}
export const _TorqueCheckbox = Checkbox.bind({});