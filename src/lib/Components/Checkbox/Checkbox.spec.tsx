import React from 'react';
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import { TorqueCheckbox } from './Checkbox.Component';

describe('Torque Checkbox', () => {
    let component: ReactTestRenderer;

    beforeEach(() => {
        component = renderer.create(<TorqueCheckbox></TorqueCheckbox>)
    });

    it('Should Render', () => {
        let json: ReactTestRendererJSON = component.toJSON() as ReactTestRendererJSON;
        expect(json.props).toBeDefined();
    })
});