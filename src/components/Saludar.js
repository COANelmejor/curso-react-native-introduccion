import { Text } from 'react-native';

export default function Saludar({firstname, lastname}) {
    return (
        <Text>
            Hola {firstname} {lastname}
        </Text>
    )
}