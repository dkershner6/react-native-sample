import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react-native';
import Home from './Home';

describe('Home', () => {
    it('Should be truthy', () => {
        render(<Home />);
        expect(true).toBeTruthy();
    });
});
