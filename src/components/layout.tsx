import React from 'react';

interface LayoutProps {
    fullWidth: boolean,
    children: React.ReactNode,
    grid: boolean
}

const Layout: React.FC<LayoutProps> = ({grid, children}) => {
    return (
        <>
            { children }
        </>
    );
};

export default Layout;
