import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignIn from './SignIn'
import SignUp from './SignUp'


// const SignIn = (props) => {
//   console.log(props);
//   //props.navigation.navigate()
//   const {navigation} = props;
//   return (<View style={{ flex: 1,justifyContent: 'center'}}>
//             <Text>Componente SignIn Alex</Text>
//             <Button
//                 title= "Navegar SignUp"
//                 onPress = {()=>{
//                     navigation.navigate('SignUp');
//                 }}
//             />
//         </View>
//   )
// };
 
// const SignUp = (props) => {
//     const {navigation} = props;
//     return (
//         <View style={{ flex: 1, justifyContent: 'center'}}>
//         <Text>Componente SignUp</Text>
//         <Button
//             title = 'Regresar'
//             onPress = {()=>{
//                     navigation.goBack('');
//                 }}
//         />
//     </View>
//     )
// }
 
const MainNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn,
    
  },
  SignUp: {
    screen: SignUp,
   
  },
},
{
    
    headerMode: 'none'
},
);
 
const RutasNoAutenticadas = createAppContainer(MainNavigator);
export { RutasNoAutenticadas };


