import React from 'react';
import { render, screen } from '@testing-library/react';
import SideBar from './sideBar';

describe('SideBar component', () => {

    let children: any = null;

    test('should display side bar', () => {
        render(<SideBar children={children}/>);
        expect(screen.getByTestId('side-bar-wrapper')).toBeVisible();
    });

});
