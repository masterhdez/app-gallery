import { createBottomTabNavigator, createAppContainer, MaterialTopTabBar, BottomTabBar } from 'react-navigation';
import {StackHome} from './StackHome';
import { StackFollow } from './StackFollow';
import Add from './Add';
import {StackSearch} from './StackSearch'
import Profile from './Profile';

const RutasAutenticadas = createBottomTabNavigator({

    Home:{
        screen: StackHome, 
        },
    Search: {
        screen: StackSearch,
    },
    Add:{
        screen: Add,
    },
    Follow: {
        screen: StackFollow,
    },
    Profile:{
        screen: Profile,
    },
},
    //tabBarPosition: 'botton'
);

export default createAppContainer(RutasAutenticadas);   