import { createStackNavigator, createAppContainer } from 'react-navigation';
import Publicacion from './Publicacion';
import Search from './Search'
import Autor from './Profile';
import Comentarios from './Comentarios'

const StackSearch = createStackNavigator({
    Search: {
        screen: Search,
    },
    Publicacion: {
        screen: Publicacion,
    },
    Autor: {
        screen: Autor,
    },
    Comentarios: {
        screen: Comentarios,
    }
},
{
    headerMode: "screen"
}
);

StackSearch.navigationOptions = ({navigation})=>{
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
 


export {StackSearch};