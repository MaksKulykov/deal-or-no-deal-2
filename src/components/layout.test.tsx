import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './layout';

describe('Layout component', () => {

    let children: any = null;

    test('should display layout', () => {
        render(<Layout children={children}/>);
        expect(screen.getByTestId('layout-wrapper')).toBeVisible();
    });

});
