import React, { useState } from 'react';

interface BoxProps {
    boxNumber: number,
    disabled: boolean,
    isGameFinish: boolean,
    value: string,
    onClick?: (boxNumber: number, value: string) => void
}

const Box: React.FC<BoxProps> = ({boxNumber, disabled, isGameFinish, value, onClick}) => {
    const [visible, setVisible] = useState(true);
    const [animate, setAnimate] = useState(false);
    const handleClickChild = (): void => {
        if (!disabled) {
            setTimeout(() => setVisible(!visible), 1000);
            setAnimate(!animate);
            if (onClick) {
                onClick(boxNumber, value);
            }
        }
    };

    return (
        <>
            <div style={{visibility: visible ? 'visible' : 'hidden'}}
                 className="relative flex justify-center w-1/6 h-auto p-2"
                 data-testid="box-wrapper">
                <div className={`w-full h-full ${!disabled ? 'hover:scale-110' : ''} ${animate ? 'animate-hideBox' : ''}`}>
                    <div onClick={handleClickChild}
                         data-testid="box-view"
                         className={`relative w-24 h-24 mt-12 mx-auto rounded-b shadow-sm
                         bg-gradient-to-b from-boxBodyPr to-boxBodySec ${disabled ? 'cursor-default' : 'cursor-pointer'}
                         ${isGameFinish ? 'animate-boxBodyAnim' : ''} z-10 after:content-start after:absolute
                         after:inset-y-0 after:left-[50%] after:-translate-x-1/2 after:w-16 after:bg-gradient-to-b
                         after:from-boxBodyAfterPr after:to-boxBodyAfterSec`}>
                        <div className={`block ${isGameFinish ? 'animate-boxValAnim' : ''} mx-auto my-0 opacity-0
                        text-center h-10 leading-10 font-bold bg-gradient-to-b from-boxValPr to-boxValSec`}>
                            {String.fromCharCode(8364) + ' ' + value
                                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <div className={`absolute z-10 left-[50%] -translate-x-1/2 bottom-[90%] bg-boxLid h-5
                        w-[7rem] rounded shadow-lg ${isGameFinish ? 'animate-boxLidAnim' : ''} after:content-start
                        after:absolute after:inset-y-0 after:left-[50%] after:-translate-x-1/2 after:w-16
                        after:bg-gradient-to-b after:from-boxBodyAfterSec after:to-boxBodyAfterPr`}>

                        </div>
                        <div className="absolute block bottom-5 z-20 w-full text-center text-5xl font-bold">
                            {boxNumber}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Box;
