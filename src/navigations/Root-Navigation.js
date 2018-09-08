import React from 'react';
import AppStackNavigation from './App-Stack-Navigation';
import NavigationService from './Navigation-Service';
import SplashScreen from '@Screens/splash';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

const AppNavigator = createSwitchNavigator(
    {
        Splash: SplashScreen,
        App: AppStackNavigation
    }, {
        initialRouteName: 'Splash',
        mode: 'modal',
        headerMode: 'none',
    }
);

const TopLevelNavigator = createStackNavigator(
    {
        TopLevel: AppNavigator
    }, {
        mode: 'modal',
        headerMode: 'none',
    }
)

export default class RootNavigation extends React.Component {
    render() {
        return (
            <TopLevelNavigator ref={NavigationService.setTopLevelNavigator} />
        );
    }
}