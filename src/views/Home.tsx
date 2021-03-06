import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Layout from '../components/Layout';

export const Home = () => {
    return (
        <Layout title="Derek Kershner">
            <Card elevation={8} style={styles.surface}>
                <Card.Cover
                    source={{
                        uri: 'https://dkershner.com/img/classic-car-1209334_1280.jpg',
                    }}
                    style={{ width: '100%' }}
                />
                <Card.Content>
                    <Title>Sample React Native App</Title>
                    <Paragraph>
                        This is actually an iOS/Android app. If it appears odd to you, try shrinking your browser down to the size of a phone.
                    </Paragraph>
                </Card.Content>
            </Card>
        </Layout>
    );
};

const styles = StyleSheet.create({
    surface: {
        margin: 10,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;
