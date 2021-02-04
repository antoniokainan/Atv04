import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'


export class Perfil extends Component {
    render() {
        return (
            <View>
                <Image  source={{uri: "https://pbs.twimg.com/profile_images/1280616805/todo-mundo-odeia-chris_400x400.jpg"}}/>

                <Text>
                    Nome: {this.props.route.params.nome}
                </Text>
                <Text>
                    Idade: {this.props.route.params.nome}
                </Text>
                <Text>
                    Email: {this.props.route.params.email}
                </Text>

                <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Home')}>
                    <Text>
                        Home
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Perfil