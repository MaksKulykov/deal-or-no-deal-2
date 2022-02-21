import React from 'react';

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <div className="flex justify-center flex-row flex-wrap self-center w-full max-w-screen-xl p-2 pb-10">
                { children }
            </div>
        </>
    );
};

export default Layout;
