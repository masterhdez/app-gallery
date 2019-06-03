import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import {connect} from 'react-redux'
import { TextInput } from 'react-native-gesture-handler';
import SignUpForm from './Formas/SignUpForm'
import { actionRegistro } from '../../Store/ACCIONES';


class SignUp extends Component {
    registroDeUsuario = (values) =>{
        console.log(values);
        this.props.registro(values);
    }
    render() {
        console.log(this.props.numero)
        const {navigation} = this.props;
        return (
            <View style = {styles.container}>
                
                <SignUpForm registro = {this.registroDeUsuario}/>
                <Button
                    title = 'SignIn'
                    onPress= {()=>{
                        navigation.goBack();
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#90EE90',
      paddingHorizontal: 16
    },
  });

  const mapStateToProps = (state) => ({
          numero: state.reducerPrueba,
      
  })


  const mapDispatchToProps = dispatch => ({
    registro: (values) =>{
      dispatch(actionRegistro(values));
    }

});


// const mapDispatchToProps = dispatch => ({
//   registro: (values) =>{
//     dispatch({type: 'REGISTRO', datos: values});
//   }

// });


  export default connect(mapStateToProps, mapDispatchToProps) (SignUp);
//connect toma esas dos funciones