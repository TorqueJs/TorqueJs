import { ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { TorqueIcon } from '../../Icons/Icon.Component';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueLogger, TorqueLogLevel } from '../../Utils/Logger';
import { TorqueAccordian } from './Accordian.Component';
import { TorqueAccordianProps } from './Accordian.Types';
import { TorqueAccordianContent } from './AccordianContent.Component';
import { TorqueAccordianHeader } from './AccordianHeader.Component';

export default {
    title: 'TorqueAccordian',
    component: TorqueAccordian,
    argTypes: {

    },
    args: {

    } as TorqueAccordianProps
}

const Accordian: ComponentStory<typeof TorqueAccordian> = (args: TorqueAccordianProps) => {
    const [clickedFirst, setClickedFirst] = useState(false);
    const [clickedSecond, setClickedSecond] = useState(false);
    const [clickedThird, setClickedThird] = useState(false);
    TorqueService.setTheme(DefaultThemes.CERULEAN);
    TorqueLogger.log('Loading Torque Accordian', TorqueLogLevel.WARN);
    return (
        <div>
            <TorqueAccordian isActive={ clickedFirst }  {...args}>
                <TorqueAccordianHeader onClick={ () => {
                    setClickedFirst(!clickedFirst);
                } }>
                    { clickedFirst ? <TorqueIcon icon='arrow_drop_down'></TorqueIcon> : <TorqueIcon icon='arrow_right'></TorqueIcon>}
                </TorqueAccordianHeader>
                <TorqueAccordianContent isActive={ clickedFirst } ></TorqueAccordianContent>
            </TorqueAccordian>

            <TorqueAccordian isActive={ clickedSecond }  {...args}>
                <TorqueAccordianHeader onClick={ () => {
                    setClickedSecond(!clickedSecond);
                } }>
                    { clickedSecond ? <TorqueIcon icon='arrow_drop_down'></TorqueIcon> : <TorqueIcon icon='arrow_right'></TorqueIcon>}
                </TorqueAccordianHeader>
                <TorqueAccordianContent isActive={ clickedSecond } ></TorqueAccordianContent>
            </TorqueAccordian>

            <TorqueAccordian isActive={ clickedThird }  {...args}>
                <TorqueAccordianHeader onClick={ () => {
                    setClickedThird(!clickedThird);
                } }>
                    { clickedThird ? <TorqueIcon icon='arrow_drop_down'></TorqueIcon> : <TorqueIcon icon='arrow_right'></TorqueIcon>}
                </TorqueAccordianHeader>
                <TorqueAccordianContent isActive={ clickedThird } ></TorqueAccordianContent>
            </TorqueAccordian>

        </div>
    )
}
export const _TorqueAccordian = Accordian.bind({});