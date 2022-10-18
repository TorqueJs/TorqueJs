import React from 'react';
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import { ThreeDRotation } from '../../Icons/3drotation';
import { TorqueService } from '../../Torque';
import { DefaultThemes } from '../../Types/Theme';
import { TorqueButton } from './Button.Component';

jest.mock("./../../Icons/Icon.Component", () => {
    return <ThreeDRotation icon="3drotation" color="black" fontSize="24" margin='none'></ThreeDRotation>
})

describe('Torque Button', () => {
    let component: ReactTestRenderer;

    beforeAll(() => {
        TorqueService.setTheme(DefaultThemes.CERULEAN);
    });

    beforeEach(() => {
        component = renderer.create(<TorqueButton text={'click me!'} onClick={() => {}} />);
    });

    it('Should Render', () => {
        let json: ReactTestRendererJSON = component.toJSON() as ReactTestRendererJSON;
        expect(((json.children as renderer.ReactTestRendererNode[])[0] as ReactTestRendererJSON).children).toContain('click me!');
    });
});