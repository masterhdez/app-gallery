import {takeEvery, call} from 'redux-saga/effects'
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';
import firebase from 'firebase'
import CONSTANTES from '../CONSTANTES';


const registroEnFirebase = values => 
    autenticacion
    .createUserWithEmailAndPassword(values.correo, values.password)
    .then(success => JSON.stringify(success));


    

// componentWillMount() {
//     const nameref = firebase.database().ref().child('usuarios').child('nombre')
  
//     nameref.on('value', (snapshot ) =>{
//         this.setState({
//             nombre: snapshot.val()
//         })
//     })
//   }
 

//     function writeUserData(uid, nombre, email) {
//     firebase.database().ref('usuarios/' + uid).on({
//         username: nombre,
//         email: email,
        
//       }, function(error) {
//         if (error) {
//           // The write failed...
//           console.log(error)
//         } else {
//           // Data saved successfully!
//           console.log('succesfully')
//         }
//       });
//     }
    
// const registroEnBaseDeDatos = ({uid, email, nombre}) => 
// baseDeDatos.ref(`usuarios/${uid}`).set({
//     nombre,
//     email,
    
//   });


// function writeUserData(uid, nombre, email) {
//     firebase.database().ref('usuarios/' + uid).set({
//       nombre,
//       email
//     });
//   }

function* sagaRegistro(values){
    try {
        const registro = yield call(registroEnFirebase, values.datos);
        console.log(registro);
        const {email, uid} = registro;
        console.log(values)
        const { datos: {nombre}} = values;
        // uid, email, ombre
        yield call (writeUserData, {uid, email, nombre})
        
    } catch (error) {
        console.log(error);
    }
   
}


const loginEnFirebase = ({correo, password}) => 
autenticacion.createUserWithEmailAndPassword(correo, password)
.then(success => JSON.stringify(success));
  


function* sagaLogin(values){
try {
    console.log(values);
    const resultado =  yield call(loginEnFirebase, values.datos);
    console.log(resultado);
} catch (error) {
    console.log(error);
}

    }


export default function* funcionPrimaria(){
    yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
    yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
    // yield EMAS Script 6  
    console.log('Desde nuestra funcion generadora');
}





// function writeUserData(userId, name, email, imageUrl) {
//     firebase.database().ref('users/' + userId).set({
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });
//   }



// const registroEnFirebase = values => 
//     autenticacion
//     .createUserWithEmailAndPassword(values.correo, values.password)
//     .then(success => JSON.stringify(success));


// function* generadoraRegistro(values){
//     try {
//         const registro = yield call(registroEnFirebase, values.datos);
//         console.log(registro);
        
//     } catch (error) {
//         console.log(error);
//     }
   
// }

// export default function* funcionPrimaria(){
//     yield takeEvery('REGISTRO', generadoraRegistro);
//     // yield EMAS Script 6  
//     console.log('Desde nuestra funcion generadora');
// }




// const registroEnFirebase = values => 
//     autenticacion
//     .createUserWithEmailAndPassword(values.correo, values.password)
//     .then((success)=> {
//         console.log(success);
//     })
//     .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode);
//     console.log(errorMessage);
//     // ...
//     });


// function* generadoraRegistro(values){
//     yield call (registroEnFirebase, values.datos);
//     console.log(values);
// }

// export default function* funcionPrimaria(){
//     yield takeEvery('REGISTRO', generadoraRegistro);
//     // yield EMAS Script 6  
//     console.log('Desde nuestra funcion generadora');
// }




