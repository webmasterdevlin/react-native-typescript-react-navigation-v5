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
            <NewText newerName="Crayon" clickButton={this.myFunction} />
            <Button icon="camera" mode="contained" onPress={() => this.myFunction()}>
                Press me
        </Button>
        </View>)
    }
}
export default LoginScreen;

interface IProps {
    newerName: string | number | boolean,
    newAge?: number,
    clickButton: () => void
}

type Props = {
    newerName: string | number | boolean,
    newAge?: number,
    clickButton: () => void
}

const NewText: React.FC<IProps> = (anyObjName) => {
    const [companyName, setCompanyName] = React.useState('Crayon');
    const [anotherState, setAnotherState] = React.useState(0);

    React.useEffect(() => {
        setCompanyName(anyObjName.newerName)
    }, [])

    return (<View>
        <Button onPress={() => anyObjName.clickButton}>Click</Button>
        <Text style={{ fontSize: 50 }}>{companyName}</Text>
    </View>)
}

