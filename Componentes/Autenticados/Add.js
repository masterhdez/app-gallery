import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Add extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Add </Text>
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


  export default Add;