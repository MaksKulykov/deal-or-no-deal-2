import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { wait } from '@testing-library/user-event/dist/utils';
import userEvent from '@testing-library/user-event';
import Box from './box';

describe('Box component', () => {

    let boxNumber = 22,
        disable = true,
        isGameFinish = false,
        value = '500',
        onClick = jest.fn();

    test('should not display box after click on it', async () => {
        render(<Box boxNumber={boxNumber} disabled={!disable} isGameFinish={isGameFinish} value={value} onClick={onClick}/>);
        const button = screen.getByTestId('box-view');
        userEvent.click(button);
        await act(async () => wait(1100)
            .then(() => expect(screen.queryByTestId('box-wrapper')).not.toBeVisible()));
    });

    test('should call onClick prop after click on box', () => {
        render(<Box boxNumber={boxNumber} disabled={!disable} isGameFinish={isGameFinish} value={value} onClick={onClick}/>);
        const button = screen.getByTestId('box-view');
        userEvent.click(button);
        expect(onClick).toBeCalledTimes(1);
    });

    test('should not call onClick prop after click on box', () => {
        render(<Box boxNumber={boxNumber} disabled={!disable} isGameFinish={isGameFinish} value={value}/>);
        const button = screen.getByTestId('box-view');
        userEvent.click(button);
        expect(onClick).not.toBeCalled();
    });

    test('should display box', () => {
        render(<Box boxNumber={boxNumber} disabled={disable} isGameFinish={isGameFinish} value={value} onClick={onClick}/>);
        const button = screen.getByTestId('box-view');
        userEvent.click(button);
        expect(screen.queryByTestId('box-wrapper')).toBeVisible();
    });

    test('should not display box', () => {
        render(<Box boxNumber={boxNumber} disabled={!disable} isGameFinish={isGameFinish} value={value} onClick={onClick}/>);
        const button = screen.getByTestId('box-view');
        userEvent.click(button);
        expect(screen.queryByTestId('box-wrapper')).toBeVisible();
    });

});
