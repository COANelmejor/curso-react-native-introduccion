import { Text } from 'react-native';

export default function Saludar({
    firstname = 'John',
    lastname = 'Doe'
}) {
    return (
        <Text>
            Hola {firstname} {lastname}
        </Text>
    )
}