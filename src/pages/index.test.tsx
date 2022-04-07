import React from 'react';
import { render, screen } from '@testing-library/react';
import Pages from './index';

describe('Pages component', () => {

    test('should display pages', () => {
        render(<Pages />);
        expect(screen.getByTestId('game-component')).toBeVisible();
    });

});
