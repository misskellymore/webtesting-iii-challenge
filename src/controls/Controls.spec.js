// Test away!

import React from 'react';
import Controls from './Controls.js';

import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';


// Controls snapshot
describe('<Controls />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Controls />).toJSON;

        expect(tree).toMatchSnapshot();
    })

    
})