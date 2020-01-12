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
    removeTodoFromList: (event: string) => void
}

const TodoView: React.FC<IProps> = ({ item, removeTodoFromList }) => {

    const [visible, setVisible] = React.useState<boolean>(false);
    const [deleteLoading, setDeleteLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string>('')

    const deleteTodoFromDialog = async () => {
        setDeleteLoading(true);
        try {
            await deleteTodo(item.id); // removing from the DB
            removeTodoFromList(item.id) // removing from the UI
        } catch (e) {
            setError(e.message)
        }
        setDeleteLoading(false);
    }

    return (
        <>
            <List.Item onPress={() => setVisible(true)}
                title={item.title} description={item.description}
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
            <Portal>
                <Dialog visible={visible}
                    onDismiss={() => setVisible(false)}>
                    <Dialog.Title>Edit your todo</Dialog.Title>
                    <Dialog.Content>
                        <View style={{ marginBottom: 20 }}>
                            <View style={styles.divider} />
                            <TextInput />
                            <View style={styles.divider} />
                            <TextInput />
                        </View>
                        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                            <Switch />
                            <Paragraph style={{ paddingLeft: 16, alignSelf: 'center' }}>
                                Finished
                            </Paragraph>
                        </View>
                        <HelperText type="error">{error}</HelperText>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button loading={deleteLoading}
                            onPress={() => deleteTodoFromDialog()} >
                            delete
                        </Button>
                        <View style={{ flex: 1 }} />
                        <Button onPress={() => setVisible(false)} >Cancel</Button>
                        <Button >Update</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </>
    )
}
export default TodoView;

const styles = StyleSheet.create({
    divider: {
        height: 16,
    },
});