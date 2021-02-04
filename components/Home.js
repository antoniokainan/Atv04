import React, { Component } from 'react'
import {Text, TouchableOpacity, View } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Cadastro')}>
                    <Text >
                        Cadastro
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={()=> this.props.navigation.navigate('IMC')}>
                    <Text >
                        IMC
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Sobre')}>
                    <Text>
                        Sobre
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}