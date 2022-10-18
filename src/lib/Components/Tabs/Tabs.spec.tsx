import React from 'react';
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import { TorqueTabs } from './Tabs.Component';

describe('Torque Tabs', () => {
    let component: ReactTestRenderer;

    beforeEach(() => {
        component = renderer.create(<TorqueTabs></TorqueTabs>)
    });

    it('Should Render', () => {
        let json: ReactTestRendererJSON = component.toJSON() as ReactTestRendererJSON;
        expect(json.props).toBeDefined();
    })
});