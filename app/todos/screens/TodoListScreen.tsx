import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import {
    ActivityIndicator, Divider, HelperText, Portal, Snackbar, Text
} from 'react-native-paper';
import { ITodoModel } from '../todo-model';
import { getTodos } from '../todo-service';

const TodoListScreen: React.FC<void> = () => {
    const [todos, setTodos] = React.useState<ITodoModel[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    const fetch = async () => {
        const { data } = await getTodos(); // response.data
        setTodos(data)
    }

    React.useEffect(() => {
        fetch()
    }, [])

    return (
        <>
            {loading ? (
                <View style={styles.loaderBase}>
                    <ActivityIndicator animating size="large" />
                </View>
            ) : (
                    <View style={styles.base}>
                        {todos.map(todo => (
                            <View key={todo.id}>
                                <Text>{todo.title}</Text>
                            </View>
                        ))}
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
