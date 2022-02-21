import React from 'react';

interface BoxProps {
    boxNumber: number,
    disabled: boolean,
    isGameFinish: boolean,
    value: string,
    onClick: (boxNumber: number, value: string) => void
}

const Box: React.FC<BoxProps> = ({boxNumber, disabled, isGameFinish, value, onClick}) => {
    console.log(boxNumber);
    return (
        <>
            { boxNumber }
        </>
    );
};

export default Box;
