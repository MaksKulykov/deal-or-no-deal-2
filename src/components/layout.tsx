import React from 'react';

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <div className="flex justify-center flex-row flex-wrap flex-grow self-center w-full max-w-screen-xl p-2 pb-10"
                 data-testid="layout-wrapper">
                { children }
            </div>
        </>
    );
};

export default Layout;
