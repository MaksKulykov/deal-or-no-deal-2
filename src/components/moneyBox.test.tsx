import React from 'react';
import { render, screen } from '@testing-library/react';
import MoneyBox from './moneyBox';

describe('MoneyBox component', () => {

    let value = '500',
        animate = true,
        reverse = true;

    test('should display footer', () => {
        render(<MoneyBox value={value} animate={animate} reverse={reverse}/>);
        expect(screen.getByTestId('money-box-wrapper')).toBeVisible();
    });

});
