/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Button, Text, View, YellowBox, Image  } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
class HomeScreen extends Component {
  static navigationOptions = {
    title: '首页'
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>首页</Text>
        <Button
          title="前往个人中心"
          onPress={() => this.props.navigation.navigate('personCenter')}
        />
      </View>
    );
  }
}

class HistoryScreen extends Component {
    render () {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>历史记录</Text>
                <Button
                    title="前往首页"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}

class personCenterScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>个人中心</Text>
        <Button
          title="前往历史"
          onPress={() => this.props.navigation.navigate('History')}
        />
      </View>
    );
  }
}

export default createBottomTabNavigator({
    Home: {
        screen: HomeScreen
    },
    History: {
        screen: HistoryScreen,
        navigationOptions: ({ navigation }) => ({
            title: '历史记录'
          }),
    },
    personCenter: {
        screen: personCenterScreen,
        navigationOptions: ({ navigation }) => ({
            title: '个人中心'
          }),
    },
  }, {
      tabBarOptions: {
        activeTintColor: '#333333',
        inactiveTintColor: '#cccccc',
        showIcon: true
      },
      tabBarPosition: 'top'
  })

  YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);