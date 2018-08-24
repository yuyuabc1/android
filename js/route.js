import React, { Component } from 'react';
import { Button, Text, View, YellowBox, Image, StyleSheet  } from 'react-native';
import Index from './index'
class HomeScreen extends Component {
  static navigationOptions = {
    title: '首页',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../static/images/icon_home_home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  }

  render() {
      return (
        <Index />
      )
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

const styles = StyleSheet.create({
    icon: {
      height: 38,
      width: 40,
      resizeMode: 'contain'
    }
  })

const routeTabs = {
    Home: {
        screen: HomeScreen
    },
    History: {
        screen: HistoryScreen,
        navigationOptions: ({ navigation, tintColor }) => ({
            title: '历史记录',
            tabBarIcon: ({tintColor}) => (
              <Image
                source={require('../static/images/icon_home_study.png')}
                style={[styles.icon, {tintColor: tintColor}]}
              />
            )
          }),
    },
    personCenter: {
        screen: personCenterScreen,
        navigationOptions: ({ navigation }) => ({
            title: '个人中心',
            tabBarIcon: ({tintColor}) => (
              <Image
                source={require('../static/images/icon_home_user.png')}
                style={[styles.icon, {tintColor: tintColor}]}
              />
            )
          })
    }
}

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default routeTabs
