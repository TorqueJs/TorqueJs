import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueAccordian } from './Accordian.Component';
import { TorqueAccordianProps } from './Accordian.Types';

export default {
    title: 'TorqueAccordian',
    component: TorqueAccordian,
    argTypes: {

    },
    args: {

    } as TorqueAccordianProps
}

const Accordian: ComponentStory<typeof TorqueAccordian> = (args: TorqueAccordianProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <TorqueAccordian {...args} />
    )
}
export const _TorqueAccordian = Accordian.bind({});