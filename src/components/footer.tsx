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
                 className="flex self-center w-full h-[20vh]"
                 data-testid="footer-wrapper">
                <div className="text-boxBodySec 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg font-bold
                self-center w-2/3 p-[100px]"
                     data-testid="footer-counter">
                    Choose {boxCounter} {boxCounter > 1 ? 'boxes' : 'box'}
                </div>
                { children }
            </div>
        </>
    );
};

export default Footer;
