import React, { Component } from 'react'
import { TextInput, View, TouchableOpacity, Text } from 'react-native'
import { style } from './style'

export class IMC extends Component {
    constructor(props){
        super(props)
        this.state = {
            peso: 0,
            altura: 0,
        }
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput style={style.textInput} placeholder="Peso (Kg)" onChangeText={(peso)=>this.setState({peso: peso})}>
                </TextInput>
                <TextInput style={style.textInput} placeholder="Altura (cm)"  onChangeText={(altura)=>this.setState({altura: altura/100})}>
                </TextInput>
                <TouchableOpacity style={style.button} onPress={()=> this.props.navigation.navigate('Resultado',{peso: this.state.peso, altura: this.state.altura} )}>
                    <Text style={style.buttonText}>
                        Calcular
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default IMC