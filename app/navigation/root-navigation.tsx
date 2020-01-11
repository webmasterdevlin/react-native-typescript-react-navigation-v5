import * as React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../auth/LoginScreen';

const Stack = createStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationNativeContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationNativeContainer>
    );
}
