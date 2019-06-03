import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import {Field, reduxForm} from 'redux-form'
import {autenticacion} from '../../../Store/Servicios/Firebase';

const fieldNombre = (props) =>{
    return(
        <View style ={styles.textInput}>
        <TextInput placeholder = {props.ph}
            onChangeText = {props.input.onChange}
            value = {props.input.value}
            keyboardType = {props.input.name === 'correo' ? 'email-address' : 'default'}
            autoCapitalize= 'none'
            secureTextEntry = {!! (props.input.name === 'password' || props.input.name === 'confirmacion')}
            onBlur = {props.input.onBlur}
        />
        <View style = {styles.linea}/>
        {props.meta.touched && props.meta.error && <Text style = {styles.errors}>{props.meta.error}</Text>}
        </View>
    )
}
//una forma es un componente ---- componente funcional

const validate = (values) =>{
    const errors = {};
    if(!values.nombre){
        errors.nombre = 'requerido';
    } else if  (values.nombre.length < 5){
        errors.nombre = 'Deben de ser al menos 5 caracteres';
    }else if (values.nombre.length > 15){
        errors.nombre = 'de ser menor a 15 caracteres';
    }

    if (!values.correo){
        errors.correo = 'requerido';
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)){
        errors.correo = 'correo invalido'
    }

    if(!values.password){
        errors.password = 'requerido'
    }else if(values.password.length < 6){
        errors.password = 'Deben ser al menos 6 caracteres'
    }else if(values.password.length > 15){
        errors.password = ' Deben de ser menos de 15 caracteres'
    }

    if (!values.confirmacion){
        errors.confirmacion = 'requerido'
    }else if(values.password !== values.confirmacion){
        errors.confirmacion = 'El password no coincide';
        
    }
    return errors;

}

const SignUpForm = (props)=>{
    return(
        <View>
            <Field name="nombre" component = {fieldNombre} ph='Nombre'/>
            <Field name="correo" component = {fieldNombre} ph='correo@.com'/>
            <Field name="password" component = {fieldNombre} ph='********'/>
            <Field name="confirmacion" component = {fieldNombre} ph='********'/>
        
            <Button
                title = 'Registrar'
                onPress = {props.handleSubmit(props.registro,
                    // props.registro,
                //     (values) =>{
                //     console.log(values);
                //     autenticacion
                //     .createUserWithEmailAndPassword(values.correo, values.password)
                //     .then((success)=> {
                //         console.log(success)
                //     })
                //     .catch(function(error) {
                //     // Handle Errors here.
                //     var errorCode = error.code;
                //     var errorMessage = error.message;
                //     console.log(errorCode);
                //     console.log(errorMessage);
                //     // ...
                //     });

                // }
                )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 16,
    },
    linea:{
        backgroundColor: '#DCDCDC',
        height: 2
    },
    errors: {
        color: '#FF0000'
    }
})

export default reduxForm({
    form: 'SignUpForm',
    validate,

})(SignUpForm);