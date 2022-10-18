import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueInput } from './Input.Component';
import { TorqueInputProps } from './Input.Types';

export default {
    title: 'TorqueInput',
    component: TorqueInput,
    argTypes: {

    },
    args: {

    } as TorqueInputProps
}

const Input: ComponentStory<typeof TorqueInput> = (args: TorqueInputProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <TorqueInput {...args} />
    )
}
export const _TorqueInput = Input.bind({});