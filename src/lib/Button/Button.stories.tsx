import React from 'react';
import { TorqueButton } from './Button.Component';
import { ComponentStory } from '@storybook/react';
import { TorqueService } from '../Torque';
import { DefaultThemes } from '../Types/Theme';

export default {
    title: 'TorqueButton',
    component: TorqueButton,
    argTypes: { 
        onClick: {
            action: 'clicked',
            name: 'On Click',
            description: 'Callback For Click Event'
        },
        text: {
            name: 'Button Text',
            type: {
                name: 'string',
                require: true
            },
            description: 'Button Text',
            control: {
                type: 'text'
            }
        }
    },
    args: {
        text: 'click me!'
    }
}

const Template: ComponentStory<typeof TorqueButton> = (args) => {
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    return (
        <TorqueButton {...args} />
    );
};

export const _TorqueButton = Template.bind({});