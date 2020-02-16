import React from 'react';
import { StyleSheet, Linking } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import Layout from '../components/Layout';

export const About = () => {
    return (
        <Layout title="About">
            <Card elevation={8} style={styles.surface}>
                <Card.Content>
                    <Title>More Info</Title>
                    <Paragraph>For the most up to date information, see my main portfolio site.</Paragraph>
                </Card.Content>
                <Button onPress={() => Linking.openURL('https://dkershner.com')}>Go There</Button>
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

export default About;
