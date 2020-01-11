import React from 'react';
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';

const LoginScreen = () => {
    return (<View>
        <Text>Hello LoginScreen</Text>
        <Text>Hello LoginScreen</Text>
        <Text>Hello LoginScreen</Text>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
        </Button>
    </View>)
}
export default LoginScreen;