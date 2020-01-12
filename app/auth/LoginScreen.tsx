import React from 'react';
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';

class LoginScreen extends React.Component {
    state = {
        firstName: 'old default value'
    }

    myFunction = () => {
        this.setState({ firstName: "the new value" })
    }

    componentDidMount() {
        // HTTP Requests
    }

    render() {
        return (<View>
            <Text>Hello LoginScreen</Text>
            <Text>Hello LoginScreen</Text>
            <NewText newerName={this.state.firstName} clickButton={this.myFunction} />
            <Button icon="camera" mode="contained" onPress={() => this.myFunction()}>
                Press me
        </Button>
        </View>)
    }
}
export default LoginScreen;

interface IProps {
    newerName: string | number,
    newAge?: number,
    clickButton: () => void
}

type Props = {
    newerName: string | number,
    newAge?: number,
    clickButton: () => void
}

const NewText: React.FC<IProps> = (anyObjName) => {
    const [companyName, setCompanyName] = React.useState<string | number>('Crayon');
    const [anotherState, setAnotherState] = React.useState<number>(0);

    React.useEffect(() => {
        setCompanyName(anyObjName.newerName)
    }, [anyObjName])

    return (<View>
        <Button onPress={() => anyObjName.clickButton}>Click</Button>
        <Text style={{ fontSize: 50 }}>{companyName}</Text>
    </View>)
}

