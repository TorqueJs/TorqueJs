import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueRadio } from './Radio.Component';
import { TorqueRadioProps } from './Radio.Types';

export default {
    title: 'TorqueRadio',
    component: TorqueRadio,
    argTypes: {

    },
    args: {

    } as TorqueRadioProps
}

const Radio: ComponentStory<typeof TorqueRadio> = (args: TorqueRadioProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <TorqueRadio {...args} />
    )
}
export const _TorqueRadio = Radio.bind({});