import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import Home from './views/Home';
import About from './views/About';

const routes = [
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'about', title: 'About', icon: 'account-details' },
];

const renderScene = BottomNavigation.SceneMap({
    home: Home,
    about: About,
});

export const Navigator = () => {
    const [index, setIndex] = useState(0);
    const navigationState = { index, routes };

    return <BottomNavigation style={{ width: '100%' }} navigationState={navigationState} onIndexChange={setIndex} renderScene={renderScene} />;
};

export default Navigator;
