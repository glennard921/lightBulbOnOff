import React from 'react';
import {View, Text, Image, Switch, StyleSheet} from 'react-native';

export default class App extends React.Component {
  state = {
    switchValue: false,
    backgroundColor: 'black',
    color: 'offText',
    bulbImage: require('./assets/offBulb.png'),
  };

  handleSwitchToggle = (switchValue) => {
    const backgroundColor = switchValue ? '#fdfd96' : 'black';
    const color = switchValue ? 'onText' : 'offText';
    const bulbImage = switchValue ? require('./assets/onBulb.png') : require('./assets/offBulb.png');
    this.setState({ switchValue, backgroundColor, color, bulbImage, });
  };

  render(){
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <Text style={[styles.textTitle, styles[this.state.color]]}>Light Bulb Switch</Text>
        <Text style={[styles.textSubTitle, styles[this.state.color]]}>AMC MP1</Text>
        <Image source={this.state.bulbImage} style={styles.bulbImage} />
        <Switch value={this.state.switchValue} onValueChange={this.handleSwitchToggle} style={{backgroundColor:'white'}}/>
        <Text style={[styles.textSubTitle, styles[this.state.color]]}>{this.state.switchValue ? 'ON' : 'OFF'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
  },
  bulbImage: {
    width: 62,
    height: 80,
    marginBottom: 20
  },
  textTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textSubTitle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 50,
  },
  offText: {
    color: '#fdfd96',
  },
  onText: {
    color: 'black',
  },

});
