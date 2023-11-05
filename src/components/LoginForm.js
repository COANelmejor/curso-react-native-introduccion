import { TextInput, Button, Text, View } from "react-native";

export default function LoginForm() {
    return (
        <View>
            <TextInput placeholder="Email"></TextInput>
            <TextInput placeholder="Contraseña"></TextInput>
            <Button title="Iniciar Sesión"
                onPress={() => console.log('Info enviada')}
            />
        </View>
    )
}