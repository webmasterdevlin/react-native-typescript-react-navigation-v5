import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import {
    Button, Dialog, HelperText, Paragraph,
    Portal, Text, TextInput
} from 'react-native-paper';
import { postTodo } from '../todo-service';
import { ITodoModel } from '../todo-model';

interface IProps {
    text: string;
    updateList: (event: ITodoModel) => void;
}

const Header: React.FC<IProps> = ({ text, updateList }) => {
    const [visible, setVisible] = React.useState<boolean>(false);
    const [todo, setTodo] = React.useState<ITodoModel>({
        title: '',
        description: ''
    } as ITodoModel);
    const [createLoading, setCreateLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>('')
    return (
        <View style={styles.header}>

        </View>
    );
}
export default Header;

const styles = StyleSheet.create({
    text: {
        fontSize: 35,
        lineHeight: 35,
        fontWeight: '700',
        padding: 32,
        paddingLeft: 16,
    },
    header: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    divider: {
        height: 16,
    },
    buttonFrame: {
        justifyContent: 'center',
    },
});