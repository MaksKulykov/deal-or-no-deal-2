import React from 'react';
import { render, screen } from '@testing-library/react';
import SideBar from './sideBar';

describe('SideBar component', () => {

    let children: null;

    test('should display layout', () => {
        render(<SideBar children={children}/>);
        expect(screen.getByTestId('side-bar-wrapper')).toBeVisible();
    });

});
