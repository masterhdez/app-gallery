import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import { autenticacion } from './Store/Servicios/Firebase';
import {RutasAutenticadas} from './Componentes/Autenticados/RutasAutenticadas';
import { RutasNoAutenticadas } from './Componentes/NoAutenticados/RutasNoAutenticadas';
import { actionEstablecerSesion } from './Store/ACCIONES';


 class Seleccion extends Component {
     componentDidMount(){
        this.props.autenticacion();
     }
    render() {
        return (
            <View style = {styles.container}>
                <RutasNoAutenticadas/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
  });

  mapStateToProps = state => ({
          prop: state.prop
  });

  mapDispatchToProps = dispatch => ({
          autenticacion: () =>{
            //   dispatch(actinCreator)
            autenticacion.onAuthStateChanged(function(usuario) {
                if (usuario) {
                    console.log(JSON.stringify(usuario))
                    dispatch(actionEstablecerSesion(usuario));
                  // ...
                } else {
                  console.log('No existe sesión');
                  //dispatch(actionCerrarSesion());
                }
              });
      }
  });


  export default connect(mapStateToProps, mapDispatchToProps)(Seleccion)

