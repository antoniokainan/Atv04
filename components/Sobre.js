import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { style } from './style'


export class Sobre extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text >
                    Olá
                </Text>

                <TouchableOpacity style={style.button} onPress={()=> this.props.navigation.goBack()}>
                    <Text style={style.buttonText}>
                        Home
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Sobre