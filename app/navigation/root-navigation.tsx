import * as React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../auth/LoginScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationNativeContainer>
            <Stack.Navigator initialRouteName="loginScreen">
                <Stack.Screen
                    name="loginScreen"
                    component={LoginScreen} />
            </Stack.Navigator>
        </NavigationNativeContainer>
    );
};
export default RootNavigation;
