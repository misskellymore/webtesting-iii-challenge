// Test away

import React from 'react';
import Dashboard from './Dashboard.js';

import '@testing-library/react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer'


describe('<Dashboard />', () => {

    // snapshot test

    it('should match snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON;
        expect(tree).toMatchSnapshot();
    });

    // automatic display test

    it('should first diplay open and unlocked', () =>{
        const {getByText} = render(<Dashboard />)
        getByText(/open/i)
        getByText(/unlocked/i) 
    })
 
   
})


   