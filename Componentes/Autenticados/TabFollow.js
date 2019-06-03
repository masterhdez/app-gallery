import {createMaterialTopTabNavigator ,createBottomTabNavigator, createAppContainer} from 'react-navigation'
import Follow from './Follow'


const TabFollow = createMaterialTopTabNavigator ({

    Follow:{    //Lista de autores a que seguimos
        screen: Follow,
    },
    Followers: {    //Lista de autores que nos siguen 
        screen: Follow,
    },
},
{
    
}
)

export default createAppContainer (TabFollow);
