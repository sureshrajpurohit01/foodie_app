// import React, { Component } from 'react';
// import { Alert,View, Text, TextInput, Image, StyleSheet, TouchableOpacity,Dimensions, ScrollView, AppRegistry, Button,TouchableHighlight } from 'react-native';
// import {TabNavigator,TabView,TabBarBottom} from 'react-navigation'
// import Icon from '../../common/icons';
// import ThemeStyle from '../../styles/Theme';
// import STRINGS from '../../constants/STRINGS';
//
// import CartScene from './CartScene';
// import WishlistScene from './WishlistScene';
// import HomeScene from './HomeScene';
// import MenuScene from './MenuScene';
// import AccountScene from './AccountScene';
//
// const {width, height} = Dimensions.get('window');
// const iconActiveTintColor = "#FFF";
// const iconInActiveTintColor = "#555";
//
// const tabNav = TabNavigator({
//   TabItem1: {
//     screen: CartScene,
//     navigationOptions: {
//       tabBarLabel:"CART",
//       tabBarIcon: ({ focused }) => (
//           <Icon name="shopping-cart" family="Feather" size={22} color={focused ? iconActiveTintColor : iconInActiveTintColor} />
//         ),
//     }
//   },
//
//   TabItem2: {
//     screen: WishlistScene,
//     navigationOptions: {
//       tabBarLabel:"WISHLIST",
//       tabBarIcon: ({ focused }) => (
//           <Icon name="heart" family="Feather" size={22} color={focused ? iconActiveTintColor : iconInActiveTintColor} />
//         ),
//     },
//   },
//
//   TabItem3: {
//     screen: WishlistScene,
//     navigationOptions: {
//       tabBarLabel:"HOME",
//       tabBarIcon: ({ focused }) => (
//           <Icon name="home" family="Feather" size={22} color={focused ? iconActiveTintColor : iconInActiveTintColor} />
//         ),
//     },
//   },
//
//   TabItem4: {
//     screen: MenuScene,
//     navigationOptions: {
//       tabBarLabel:"MENU",
//       tabBarIcon: ({ focused }) => (
//           <Icon name="menu" family="Feather" size={22} color={focused ? iconActiveTintColor : iconInActiveTintColor} />
//         ),
//     }
//   },
//
//   TabItem5: {
//     screen: AccountScene,
//     navigationOptions: {
//       tabBarLabel:"ACCOUNT",
//       tabBarIcon: ({ focused }) => (
//           <Icon name="users" family="Feather" size={22} color={focused ? iconActiveTintColor : iconInActiveTintColor} />
//         ),
//     }
//   },
//
// },{
//   tabBarComponent: TabBarBottom,
//   tabBarPosition: 'bottom',
//   swipeEnabled :false,
//   animationEnabled :true,
//   //initialRouteName :"TabItem1",
//   //backBehavior: 'none',
//   tabBarOptions: {
//     activeTintColor:'#FFF',
//     inactiveTintColor:'#555',
//     style: {
//       backgroundColor: '#FF9D1E',
//     },
//     labelStyle: {
// 			fontSize: 14,
// 		  fontWeight:'bold',
// 		},
//     tabStyle :{
//       //width:width,
//     },
//   },
// });
//
// export default tabNav;
