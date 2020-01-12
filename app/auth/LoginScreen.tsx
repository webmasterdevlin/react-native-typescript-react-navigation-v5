import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import {
    Headline, Paragraph, TextInput, Button, Snackbar, Portal
} from 'react-native-paper';


const LoginScreen: React.FC<any> = (props) => {
    return (
        <View style={styles.base}>
            <>
                <StatusBar backgroundColor="#ffffff" />
            </>
            <View style={styles.header}>
                <Headline style={styles.appTitle} >Todo App</Headline>
                <Paragraph style={styles.appDesc}>Inmeta React Native Course</Paragraph>
            </View>
            <>
                <View style={styles.divider} />
                <TextInput onChange={() => { }} label="Username or email" />
            </>
            <>
                <View style={styles.divider} />
                <TextInput onChange={() => { }} label="Password" secureTextEntry />
            </>
            <>
                <View style={styles.divider} />
                <Button disabled={false}
                    style={styles.btn} mode="contained"
                    onPress={() => {
                        props.navigation.navigate('todoListScreen')
                    }}>Login</Button>
                <View style={styles.divider} />
                <View style={styles.divider} />
            </>
            <>
                <Portal>
                    <Snackbar visible={false} onDismiss={() => { }}>
                        Error
                    </Snackbar>
                </Portal>
            </>
        </View>
    )
}
export default LoginScreen;


const styles = StyleSheet.create({
    base: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    divider: {
        height: 16,
    },
    headline: {
        fontSize: 30,
    },
    appDesc: {
        textAlign: 'center',
    },
    header: {
        padding: 32,
    },
    appTitle: {
        textAlign: 'center',
        fontSize: 35,
        lineHeight: 35,
        fontWeight: '700',
    },
    btn: {
        height: 50,
        paddingTop: 6,
    },
});
