import React from 'react';

interface MoneyBoxProps {
    key: string,
    value: string,
    animate: boolean,
    reverse: boolean
}

const MoneyBox: React.FC<MoneyBoxProps> = ({value, animate, reverse}) => {
    return (
        <>
            <div className={`rounded-md w-[80%] min-w-[150px] h-auto p-1 m-2 text-center font-bold text-2xl ${animate ? 
                    'bg-gradient-to-b from-boxBodyPr to-boxBodySec' : 'bg-gradient-to-b from-boxValPr to-boxValSec'}
                    ${animate ? (reverse ? 'animate-leftMoneyBoxAnim' : 'animate-rightMoneyBoxAnim') : ''}`}>
                {String.fromCharCode(8364) + ' ' + value.toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </div>
        </>
    );
};

export default MoneyBox;
