import React from 'react'
import { View, StyleSheet, Alert } from 'react-native';
import {
    List, Colors, Portal, Dialog, Paragraph,
    TextInput, Button, Switch, HelperText
} from 'react-native-paper';
import { ITodoModel } from '../todo-model';
import { deleteTodo } from '../todo-service';

interface IProps {
    item: ITodoModel;
}

const TodoView: React.FC<IProps> = ({ item }) => {

    return (
        <>
            <List.Item title={item.title} description={item.description}
                right={otherProps => {
                    if (item.finished) {
                        return (
                            <List.Icon {...otherProps}
                                color={Colors.green300}
                                icon="check-circle" />
                        )
                    }
                }}
            />
        </>
    )
}
export default TodoView;

const styles = StyleSheet.create({
    divider: {
        height: 16,
    },
});