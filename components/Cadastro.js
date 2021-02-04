import React, { Component } from 'react'
import { TextInput, View, TouchableOpacity, Text } from 'react-native'

export class Cadastro extends Component {

    constructor(props){
        super(props);
        this.state = {
            nome:"",
            idade:"",
            email:""
        }
    }

    render() {
        return (
            <View>
                <TextInput placeholder="Nome" onChangeText={(nome)=>{this.setState({nome:nome})}}></TextInput>

                <TextInput placeholder="Idade" onChangeText={(idade)=>{this.setState({idade:idade})}}></TextInput>

                <TextInput placeholder="E-mail" onChangeText={(email)=>{this.setState({email:email})}}></TextInput>

                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Perfil',{nome: this.state.nome, idade: this.state.idade, email:this.state.email})}>
                    <Text>
                        Cadastrar
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default Cadastro