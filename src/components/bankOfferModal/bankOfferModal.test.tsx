import React from 'react';
import { render, screen } from '@testing-library/react';
import BankOfferModal from './bankOfferModal';

describe('BankOfferModal component', () => {

    let isOpen = true,
        isGameFinish = false,
        calcBankSum = 'bankSum',
        handleCloseModal = jest.fn(),
        handleEndGame = jest.fn();

    test('should display modal', () => {
        render(<BankOfferModal isOpen={isOpen} isGameFinish={isGameFinish} calcBankSum={calcBankSum}
                               handleCloseModal={handleCloseModal} handleEndGame={handleEndGame}/>);
        expect(screen.getByTestId('modal-body')).toBeVisible();
    });

});
