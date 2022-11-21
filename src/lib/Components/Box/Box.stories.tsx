import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueLogger, TorqueLogLevel } from '../../Utils/Logger';
import { TorqueBox } from './Box.Component';
import { TorqueBoxProps } from './Box.Types';

export default {
    title: 'TorqueBox',
    component: TorqueBox,
    argTypes: {

    },
    args: {
        identifier: 'flex-column',
        themeOverride: {}
    } as TorqueBoxProps
}

const Box: ComponentStory<typeof TorqueBox> = (args: TorqueBoxProps) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    TorqueLogger.log('Loading Torque Box Display Flex', TorqueLogLevel.WARN);
    document.getElementById('root')?.setAttribute('style', 'height: calc(100vh - 2rem)')
    return (
        <TorqueBox identifier="flex-column">
            <TorqueBox identifier="flex-row">
                <TorqueBox identifier='flex-column' themeOverride={{ default: { background: '#FF00FF'} }}>
                    This is the Magenta Container
                </TorqueBox>
                <TorqueBox identifier='flex-column' themeOverride={{ default: { background: '#FFFF00'} }}>
                    This is the Yellow Container
                </TorqueBox>
            </TorqueBox>
            <TorqueBox identifier="flex-row" themeOverride={{ default: { background: '#00FFFF'} }}>
                This is the Cyan Container
            </TorqueBox>
        </TorqueBox>
    )
}
export const _TorqueBoxDisplayFlex = Box.bind({});