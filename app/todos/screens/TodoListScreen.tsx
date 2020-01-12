import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import {
    ActivityIndicator, Divider, HelperText, Portal, Snackbar, Text
} from 'react-native-paper';
import { ITodoModel } from '../todo-model';
import { getTodos } from '../todo-service';

const TodoListScreen: React.FC<void> = () => {
    const [loading, setLoading] = React.useState<boolean>(false)
    return (
        <>
            {loading ? (
                <View style={styles.loaderBase}>
                    <ActivityIndicator animating size="large" />
                </View>
            )}
        </>
    )
}

export default TodoListScreen;


const styles = StyleSheet.create({
    base: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loaderBase: {
        padding: 16,
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});
