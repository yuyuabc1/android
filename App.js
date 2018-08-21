/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Alert, AppRegistry, Text, Image, TextInput, Platform, Button, View, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

class Greeting extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            showText: true
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(previousState => {
              return { showText: !previousState.showText };
            });
          }, 1000);
    }



    render () {
        let display = this.state.showText ? `hello, ${this.props.name}!` : '';
        return (
            <View style={{minHeight: 30}}>
                <Text>{display}</Text>
            </View>
        )
    }
}

class ButtonBasics extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
      }
    
      render() {
        return (
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._onPressButton}
                title="Press Me"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._onPressButton}
                title="Press Me"
                color="#841584"
              />
            </View>
            <View style={styles.alternativeLayoutButtonContainer}>
              <Button
                onPress={this._onPressButton}
                title="This looks great!"
              />
              <Button
                onPress={this._onPressButton}
                title="OK!"
                color="#841584"
              />
            </View>
          </View>
        );
      }      
}

class Touchables extends Component {
    _onPressButton() {
      Alert.alert('You tapped the button!')
    }
  
    _onLongPressButton() {
      Alert.alert('You long-pressed the button!')
    }
  
  
    render() {
      return (
        <View style={styles.container}>
          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableHighlight</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
          <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableWithoutFeedback
              onPress={this._onPressButton}
              >
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Touchable with Long Press</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
  }
  

class Input extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        }
    }


    render () {
        return (
            <View>
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <TextInput
                    style={{height: 40, borderColor: 'black', borderWidth: 2, marginTop: 10}}
                    placeholder="请输入语言!"
                    onChangeText={(text) => this.setState({text})}
                ></TextInput>
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        )
    }
}

export default class HelloworldApp extends Component {
    render () {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <ScrollView>
                <Text style={styles.blue}>hello world</Text>
                <Image source={pic} style={{width: 193, height: 110}} />
                <Input />
                <Button onPress={() => {
                    Alert.alert('您点击了按钮!')
                }}
                title="点我好吗！" />
                <ButtonBasics />
                <Touchables />
                <Greeting name='www' />
                <View style={{width:'100%', height: 500, flexDirection: 'column'}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    blue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
