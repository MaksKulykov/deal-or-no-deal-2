import React from 'react';

interface SideBarProps {
    children: React.ReactNode
}

const SideBar: React.FC<SideBarProps> = ({children}) => {
    return (
        <>
            <div className="flex justify-center flex-col flex-nowrap flex-grow items-center w-auto min-w-[200px]
                    h-screen p-2 pb-10"
                 data-testid="side-bar-wrapper">
                { children }
            </div>
        </>
    );
};

export default SideBar;
