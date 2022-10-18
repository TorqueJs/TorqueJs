import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueCard } from './Card.Component';
import { TorqueCardProps } from './Card.Types';

export default {
    title: 'TorqueCard',
    component: TorqueCard,
    argTypes: {

    },
    args: {

    } as TorqueCardProps
}

const Card: ComponentStory<typeof TorqueCard> = (args: TorqueCardProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <TorqueCard {...args} />
    )
}
export const _TorqueCard = Card.bind({});