/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */



import { createBottomTabNavigator } from 'react-navigation';
import RouteTabs from './js/route.js'

export default createBottomTabNavigator(RouteTabs, {
    tabBarOptions: {
      activeTintColor: '#333333',
      inactiveTintColor: '#cccccc',
      showIcon: true
    },
    tabBarPosition: 'top'
})