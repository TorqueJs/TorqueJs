import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueLogger, TorqueLogLevel } from '../../Utils/Logger';
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
    TorqueLogger.log('Loading Torque Card', TorqueLogLevel.WARN);
    return (
        <TorqueCard {...args} />
    )
}
export const _TorqueCard = Card.bind({});