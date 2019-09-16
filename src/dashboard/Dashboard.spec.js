// Test away

import React from 'react';
import Dashboard from './Dashboard.js';

import '@testing-library/react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer'



// Gate

describe('<Dashboard />', () => {

    // snapshot test

    it('should match snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON;
        expect(tree).toMatchSnapshot();
    });

    // automatic display test (defaults to unlocked and open)

    it('should first diplay open and unlocked', () =>{
        const {getByText} = render(<Dashboard />)
        getByText(/open/i)
        getByText(/unlocked/i) 
    })

    it('should shoow controls and display', () => {
        const {getByText} = render(<Dashboard />);
        
        getByText(/Lock Gate/i);
        getByText(/Close Gate/i);
    })

    // cannot be closed or opened if locked
    it('cannot be opened if locked', () => {
        const {getByText} = render(<Dashboard />)
        const closedBtn = getByText(/Close Gate/i)
        const lockedBtn = getByText(/Lock Gate/i)

        fireEvent.click(closedBtn);
        fireEvent.click(lockedBtn);

        expect(closedBtn.disabled).toBe(true);
    })

    
    
 
   
})


   