import React, { Component } from 'react';
import { StyleSheet,Text,View, FlatList, ScrollView, TouchableOpacity,Image,Dimensions, LayoutAnimation, UIManager, Platform } from 'react-native';
import ThemeStyle from '../../styles/Theme';
import Icon from '../../common/icons';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import {Goback} from '../../actions/goBack';

const {width,height} = Dimensions.get('window');

export default class Aboutus extends Component {
    constructor(props)
    {
        super(props);
    }
    componentWillMount() {
        Goback.ComMount(this.props)
      }
      componentWillUnmount() {
        Goback.ComUnMount(this.props)
      }
  render() {
    return (
        <View style={ThemeStyle.pageContainer}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:24}}>Aboutus</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    inviteText : {
        fontSize:15,
        textAlign:'center',
        paddingVertical:1,
        backgroundColor:'transparent'
    }
})
