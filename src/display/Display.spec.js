// Test away!

import React from 'react';
import Display from './Display.js';

import renderer from 'react-test-renderer';
import {render, fireEvent} from 'react-testing-library';


describe('<Display />', () => {
    
    it('should match snapshot', () =>{
        const tree = renderer.create(<Display />).toJSON;

        expect(tree).toMatchSnapshot();
    });
});