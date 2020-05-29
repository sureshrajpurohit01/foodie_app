import React, {Component} from 'react';
import {Alert,StyleSheet,Text,View,TouchableOpacity,ScrollView} from 'react-native';
import { StackNavigator} from 'react-navigation';

export default class Sample extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render () {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#FFF'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
          <Text style={{color:'black',fontSize:28}} >PRESS HERE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
