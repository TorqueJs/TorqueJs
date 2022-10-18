import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueSelectInput } from './SelectInput.Component';
import { TorqueSelectInputProps } from './SelectInput.Types';

export default {
    title: 'TorqueSelectInput',
    component: TorqueSelectInput,
    argTypes: {

    },
    args: {

    } as TorqueSelectInputProps
}

const SelectInput: ComponentStory<typeof TorqueSelectInput> = (args: TorqueSelectInputProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <TorqueSelectInput {...args} />
    )
}
export const _TorqueSelectInput = SelectInput.bind({});