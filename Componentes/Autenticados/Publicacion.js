import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

class Publicacion extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text> Publicacion </Text>
                <Button
                    title = 'Autor'
                    onPress= {()=>{
                        navigation.navigate('Autor')
                    }}
                />
                <Button
                    title = 'Comentarios'
                    onPress = {()=>{navigation.navigate('Comentarios')}}
                />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50'
    },
  });


  export default Publicacion;