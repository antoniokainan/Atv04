import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'


export class Sobre extends Component {
    render() {
        return (
            <View>
                <Text>
                    Olá
                </Text>

                <TouchableOpacity  onPress={()=> this.props.navigation.goBack()}>
                    <Text>
                        Home
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Sobre