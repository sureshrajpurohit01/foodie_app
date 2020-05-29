import React, { Component } from 'react';
import {TabNavigator,TabView,TabBarBottom} from 'react-navigation'
import { Dimensions } from 'react-native'
import Icon from '../../common/icons';
import Theme from '../../styles/Theme';
import HomePage from '../scenes/HomePage';
import Cart from './Cart';
import WishList from './WishList';
import Account from './Account';
import Restaurant from './Restaurant';

const {width, height} = Dimensions.get('window');

const iconActiveTintColor = "#7be58c";
const iconInActiveTintColor = "#FFF";

const tabNav = TabNavigator({
  TabItem1: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel:"Home",
        tabBarIcon: ({ focused }) => (
            <Icon name="home" family="Feather" size={20} color={focused ? iconActiveTintColor : iconInActiveTintColor} />
        ),
    }
  },
  TabItem2: {
    screen: WishList,
    navigationOptions: {
      tabBarLabel:"Wishlist",
        tabBarIcon: ({ focused }) => (
            <Icon name="heart" family="Feather" size={20} color={focused ? iconActiveTintColor : iconInActiveTintColor} />
        ),
    }
  },
  TabItem3: {
    screen: Cart,
    navigationOptions: {
      tabBarLabel:"Cart",
        tabBarIcon: ({ focused }) => (
            <Icon name="shopping-cart" family="Feather" size={20} color={focused ? iconActiveTintColor : iconInActiveTintColor} />
        ),
    }
  },
  TabItem4: {
    screen: Restaurant,
    navigationOptions: {
      tabBarLabel:"Restaurant",
        tabBarIcon: ({ focused }) => (
            <Icon name="food-fork-drink" family="MaterialCommunityIcons" size={20} color={focused ? iconActiveTintColor : iconInActiveTintColor} />
        ),
    }
  },
  TabItem5: {
    screen: Account,
    navigationOptions: {
      tabBarLabel:"Account",
        tabBarIcon: ({ focused }) => (
            <Icon name="user" family="Feather" size={20} color={focused ? iconActiveTintColor : iconInActiveTintColor} />
        ),
    }
  },


},{
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled :false,
  animationEnabled :true,
  tabBarOptions: {
    activeTintColor:'#7be58c',
    inactiveTintColor:'#fff',
    style: {
      padding:2,
      backgroundColor: ThemeStyle.tabBarBackgroundColor,
    },
    tabStyle: {
      //width: width,
    },
    labelStyle: {
	    fontSize: 12,
      fontWeight:'bold',
    },
  },
});

export default tabNav;
