import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Index extends Component {
    render () {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>首页</Text>
                <Button
                    title="前往个人中心"
                    onPress={() => this.props.navigation.navigate('personCenter')}
                />
            </View>
        )
    }
}