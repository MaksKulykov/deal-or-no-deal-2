import React from "react";
import { render, screen } from "@testing-library/react";
import Box from "./box";

describe('Box component', () => {

    let boxNumber = 22,
        disable = true,
        isGameFinish = false,
        value = '500';

    test('should display box number',  () => {
        render(<Box boxNumber={boxNumber} disabled={disable} isGameFinish={isGameFinish} value={value} />);
        expect(screen.getByTestId('box-number')).toBeInTheDocument();
    });
});
