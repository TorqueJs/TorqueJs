import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueDatepicker } from './Datepicker.Component';
import { TorqueDatepickerProps } from './Datepicker.Types';

export default {
    title: 'TorqueDatepicker',
    component: TorqueDatepicker,
    argTypes: {

    },
    args: {

    } as TorqueDatepickerProps
}

const Datepicker: ComponentStory<typeof TorqueDatepicker> = (args: TorqueDatepickerProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <TorqueDatepicker {...args} />
    )
}
export const _TorqueDatepicker = Datepicker.bind({});