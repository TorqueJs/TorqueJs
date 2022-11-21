import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueLogger, TorqueLogLevel } from '../../Utils/Logger';
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
    TorqueLogger.log('Loading Torque Tooltip', TorqueLogLevel.WARN);
    return (
        <TorqueTooltip {...args} />
    )
}
export const _TorqueTooltip = Tooltip.bind({});