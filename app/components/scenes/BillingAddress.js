import React, { Component } from 'react';
import { StyleSheet,Text,View, FlatList, ScrollView, TouchableOpacity,Image,Dimensions, LayoutAnimation, UIManager, Platform } from 'react-native';
import ThemeStyle from '../../styles/Theme';
import Icon from '../../common/icons';
import Formstyle1 from '../../styles/Formstyle1';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import ScrollableTabView, { DefaultTabBar} from 'react-native-scrollable-tab-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FloatingLabel from 'react-native-floating-label';
import HomeAddress from './HomeAddress';
import WorkAddress from './WorkAddress';
import {Goback} from '../../actions/goBack';


export default class BillingAddress extends Component {
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
            <ScrollableTabView style={{height:200}}
                initialPage={0}
                tabBarBackgroundColor="white"
                tabBarActiveTextColor ={ThemeStyle.IconColor}
                tabBarInactiveTextColor ="#151356"
                tabBarUnderlineStyle={{backgroundColor:ThemeStyle.IconColor}}
                tabBarTextStyle={{paddingTop:20}}
                // onChangeTab={this.handleChangeTab.bind(this)}
                renderTabBar={ () => <DefaultTabBar badgeStyle={{position:'absolute',bottom:12,left:20,}} /> }>
                <HomeAddress tabLabel="Home Address"/>
                <WorkAddress tabLabel="Work Address" />
            </ScrollableTabView>
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
    },
})
