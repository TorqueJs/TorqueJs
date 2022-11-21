import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueLogger, TorqueLogLevel } from '../../Utils/Logger';
import { TorqueSlideToggle } from './SlideToggle.Component';
import { TorqueSlideToggleProps } from './SlideToggle.Types';

export default {
    title: 'TorqueSlideToggle',
    component: TorqueSlideToggle,
    argTypes: {

    },
    args: {

    } as TorqueSlideToggleProps
}

const SlideToggle: ComponentStory<typeof TorqueSlideToggle> = (args: TorqueSlideToggleProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    TorqueLogger.log('Loading Torque Slide Toggle', TorqueLogLevel.WARN);
    return (
        <TorqueSlideToggle {...args} />
    )
}
export const _TorqueSlideToggle = SlideToggle.bind({});