import React from 'react';
import Navigator from './Navigator';
import { View, StyleSheet } from 'react-native';

const Index = () => {
    return (
        <View style={styles.container}>
            <Navigator />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        maxWidth: 400,
    },
});

export default Index;
