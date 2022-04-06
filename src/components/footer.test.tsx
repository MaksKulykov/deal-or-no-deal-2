import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer component', () => {

    let disabled = false,
        boxCounter = 1,
        children: any = null;

    test('should display footer', () => {
        render(<Footer disabled={disabled} boxCounter={boxCounter} children={children}/>);
        expect(screen.getByTestId('footer-wrapper')).toBeVisible();
    });

    test('should not display footer', () => {
        render(<Footer disabled={!disabled} boxCounter={boxCounter} children={children}/>);
        expect(screen.getByTestId('footer-wrapper')).not.toBeVisible();
    });

});
