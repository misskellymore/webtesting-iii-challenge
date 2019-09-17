// Test away!

import React from 'react';
import Display from './Display.js';

import renderer from 'react-test-renderer';
import {render} from '@testing-library/react';



// Display snapshot
describe('<Display />', () => {
    
    it('should match snapshot', () =>{
        const tree = renderer.create(<Display />).toJSON;

        expect(tree).toMatchSnapshot();
    });

    // Testing by id

    it('should diplay open or closed', () => {
      const {getByTestId} = render(<Display />);
      expect(getByTestId("locked")).toBeDefined()       

      
    })
});