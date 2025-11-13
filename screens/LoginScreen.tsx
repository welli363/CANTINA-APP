import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


export default function LoginScreen(){
    const navigation = useNavigation();
    const [email, setEmail] = useState ('');
    const [senha, setSenha] = useState ('');

    function handleLogin(){
        //validar senha e usuario
        if(email === 'teste@gmail.com' && senha === '123'){
            navigation.navigate('Home');
        }else {
            Alert.alert('Usuário não encontrado.')
        }
        //redirecionar para a tela principal 

    }


    return(
        <View style={styles.container}>
            <Text style={styles.textoLogin}>Login</Text>
            <TextInput placeholder="Digite seu e-mail..." style={styles.input} onChangeText={(e) => setEmail (e)}></TextInput>
            <TextInput placeholder="Digite sua senha..." style={styles.input} onChangeText={(s) => setSenha (s)}></TextInput>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao} onPress={handleLogin}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoLogin: {
        fontSize:  70,
        fontFamily: 'Arial',
        marginBottom: 20, 
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        width: 200,
        margin: 5,
        borderWidth: 1,          
        borderColor: '#000',   
        borderRadius: 5,      
        paddingHorizontal: 10, 
    },
    botao: {
        marginTop: 5,
        height: 40,
        width: 100,
        backgroundColor: '#00BFFF',
        borderRadius: 10,
    },
    textoBotao:{
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 8,
    }

})