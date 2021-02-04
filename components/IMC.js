import React, { Component } from 'react'
import { TextInput, View, TouchableOpacity, Text } from 'react-native'


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
            <View>
                <TextInput placeholder="Peso (Kg)" onChangeText={(peso)=>this.setState({peso: peso})}>
                </TextInput>
                <TextInput placeholder="Altura (cm)"  onChangeText={(altura)=>this.setState({altura: altura/100})}>
                </TextInput>
                <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Resultado',{peso: this.state.peso, altura: this.state.altura} )}>
                    <Text >
                        Calcular
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default IMC