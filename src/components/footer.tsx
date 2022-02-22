import React from 'react';

interface FooterProps {
    children: React.ReactNode,
    disabled: boolean,
    boxCounter: number
}

const Footer: React.FC<FooterProps> = ({children, disabled, boxCounter}) => {
    return (
        <>
            <div style={{ visibility: disabled || boxCounter === 0 ? 'hidden' : 'visible'}}
                 className="flex self-center w-full h-[20vh]">
                <div className="text-boxBodySec text-5xl font-bold self-center w-1/2 p-[100px]">
                    Choose {boxCounter} {boxCounter > 1 ? 'boxes' : 'box'}
                </div>
                { children }
            </div>
        </>
    );
};

export default Footer;
