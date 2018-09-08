import React from 'react';
import { createStackNavigator } from 'react-navigation';
import YasStyles from '@Constants/Yas-Styles';
import HomeScreen from '@Screens/home';

const AppStackNavigation = createStackNavigator(
    {
        Home: HomeScreen
    }
    , {
        navigationOptions: {
            headerStyle: YasStyles.navbarHeaderStyle
        }
    }
);

export default AppStackNavigation;
