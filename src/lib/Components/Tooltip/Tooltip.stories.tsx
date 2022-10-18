import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueTooltip } from './Tooltip.Component';
import { TorqueTooltipProps } from './Tooltip.Types';

export default {
    title: 'TorqueTooltip',
    component: TorqueTooltip,
    argTypes: {

    },
    args: {

    } as TorqueTooltipProps
}

const Tooltip: ComponentStory<typeof TorqueTooltip> = (args: TorqueTooltipProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <TorqueTooltip {...args} />
    )
}
export const _TorqueTooltip = Tooltip.bind({});