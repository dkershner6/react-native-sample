import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import TopBar from './TopBar';

interface ILayout {
    title: string;
    children: ReactElement;
}

export const Layout = (props: ILayout) => {
    const { title, children } = props;

    return (
        <>
            <TopBar title={title} />
            {children}
        </>
    );
};

export default Layout;
