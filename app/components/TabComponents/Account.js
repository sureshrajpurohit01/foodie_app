import React, { Component } from 'react';
import { StyleSheet,Text,View, FlatList, ScrollView, TouchableOpacity,Image,Dimensions,StatusBar } from 'react-native';
import ThemeStyle from '../../styles/Theme';
import Icon from '../../common/icons';
import {Goback} from '../../actions/goBack';

const {width,height} = Dimensions.get('window');

export default class Account extends Component {
  constructor(props) {
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
        <View>
          <Image source={require('../../src/profile_background.jpg')} style={{width:width,height:200,resizeMode:'cover'}}/>
        </View>
        <View style={{flex:3}}>
          <View style={{borderBottomWidth:0.5,borderColor:'lightgrey'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
              <View style={styles.container}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Icon name="user" family="Entypo" size={22} color={ThemeStyle.IconColor} />
                  <Text style={styles.textlist}> Profile </Text>
                </View>
                <Icon name="chevron-thin-right" family="Entypo" size={20} color="#4f5154" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{borderBottomWidth:0.5,borderColor:'lightgrey'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MyOrders')}>
              <View style={styles.container}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Icon name="first-order" family="FontAwesome" size={20} color = {ThemeStyle.IconColor} />
                  <Text style={styles.textlist}> My Orders </Text>
                </View>
                <Icon name="chevron-thin-right" family="Entypo" size={20} color="#4f5154" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{borderBottomWidth:0.5,borderColor:'lightgrey'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('BillingAddress')}>
              <View style={styles.container}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Icon name="address" family="Entypo" size={20} color = {ThemeStyle.IconColor} />
                  <Text style={styles.textlist}> Billing Address </Text>
                </View>
                <Icon name="chevron-thin-right" family="Entypo" size={20} color="#4f5154" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{borderBottomWidth:0.5,borderColor:'lightgrey'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('InviteFriends')}>
              <View style={styles.container}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Icon name="ios-people" family="Ionicons" size={25} color={ThemeStyle.IconColor} />
                  <Text style={styles.textlist}> Invite Friends </Text>
                </View>
                <Icon name="chevron-thin-right" family="Entypo" size={20} color="#4f5154" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{borderBottomWidth:0.5,borderColor:'lightgrey'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Aboutus')}>
              <View style={styles.container}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Icon name="info" family="Entypo" size={22} color={ThemeStyle.IconColor} />
                  <Text style={styles.textlist}> About us </Text>
                </View>
              <Icon name="chevron-thin-right" family="Entypo" size={20} color="#4f5154" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{borderBottomWidth:0.5,borderColor:'lightgrey'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
              <View style={styles.container}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Icon name="logout" family="SimpleLineIcons" size={22} color={ThemeStyle.IconColor} />
                  <Text style={styles.textlist}> Logout </Text>
                </View>
                <Icon name="chevron-thin-right" family="Entypo" size={20} color="#4f5154" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    paddingVertical:20,
    paddingHorizontal:15,
    alignItems:'center',
    justifyContent:'space-between',
  },
  textlist:{
    fontSize:16,
    fontWeight:'bold',
    marginLeft:20,
    color:'black'
  },
});
