import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../auth/LoginScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="loginScreen">
                <Stack.Screen
                    name="loginScreen"
                    component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default RootNavigation;
