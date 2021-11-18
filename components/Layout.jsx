import React from 'react';
import { Header } from './index';

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default Layout
