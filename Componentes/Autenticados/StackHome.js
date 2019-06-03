import{StackNavigator} from 'react-navigation'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios'

const StackHome = createStackNavigator ({  
    Home : { 
      screen : Home , 
    },
    Autor : { 
      screen : Autor , 
    },
    Publicacion : { 
      screen : Publicacion , 
    },
    Comentarios : { 
      screen : Comentarios , 
      navigationOption:{
          tabBarVisible: false
      }
    }
  },
  {
      headerMode: "screen"
  }
  );
   

  StackHome.navigationOptions = ({navigation})=>{
      let tabBarVisible;
      if(navigation.state.routes.length > 1){
          navigation.state.routes.map(route =>{
              if(route.routeName === 'Comentarios'){
                  tabBarVisible = false;
              }else{
                  tabBarVisible = true;
              }
          });
      }
      return{
          tabBarVisible
      }
  }
   
   
  export { StackHome }; 