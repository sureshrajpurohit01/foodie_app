import React, { Component } from 'react';
import {Text,View,Dimensions,Image,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { StackNavigator,NavigationActions } from 'react-navigation';
import ThemeStyle from '../../styles/Theme';

import LoginScreen from '../../components/scenes/LoginScreen';
import StartScreen from '../../components/scenes/StartScreen';
import RegisterScreen from '../../components/scenes/RegisterScreen';
import HomePage from '../../components/scenes/HomePage';
import RestaurantInfoScreen from '../../components/scenes/RestaurantInfoScreen';
import FoodCategories from '../../components/scenes/FoodCategories';
import InviteFriends from '../../components/scenes/InviteFriends';
import Profile from '../../components/scenes/Profile';
import BillingAddress from '../../components/scenes/BillingAddress';
import MyOrders from '../../components/scenes/MyOrders';
import OrderDetail from '../../components/scenes/OrderDetail';
import Checkout from '../../components/scenes/Checkout';
import Aboutus from '../../components/scenes/Aboutus';


import tabNav from '../../components/TabComponents';

//Testing screen
import Sample from '../../components/scenes/Sample';
import TestScreen from '../../components/scenes/TestScreen';

const Routes = {
  StartScreen: {
    screen: StartScreen,
    navigationOptions:{
      header:null
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions:{
      header:null
    }
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions:{
      header:null
    }
  },
  HomePage: {
    screen: HomePage,
    navigationOptions:{
      header:null
    }
  },
  Sample: {
    screen: Sample,
    navigationOptions:{
      header:null
    }
  },
  TestScreen: {
    screen: TestScreen,
    navigationOptions:{
      title:'Login',
      headerTintColor: '#fff',
      headerStyle: {backgroundColor:'#ff2b40',elevation:2},
      headerTitleStyle: {color:'#FFF',fontWeight:'normal'},
    }
  },
  tabNav: {
    screen: tabNav,
    navigationOptions:{
      header:null
    }
  },
  RestaurantInfoScreen: {
    screen: RestaurantInfoScreen,
    navigationOptions:{
      title:'Restaurants',
      headerTintColor: '#3d3d3d',
      headerStyle: {backgroundColor:'#FFF',elevation:0},
      headerTitleStyle: {color:'#3d3d3d',fontWeight:'normal'},
    }
  },
  FoodCategories: {
    screen: FoodCategories,
    navigationOptions:{
        title:'Food Categories',
        headerTintColor: 'white',
        headerStyle: {backgroundColor:ThemeStyle.tabBarBackgroundColor,elevation:0},
        headerTitleStyle: {color:'#fff'},
    }
  },
  InviteFriends: {
    screen: InviteFriends,
    navigationOptions:{
        title:'Invite Friends',
        headerTintColor: 'white',
        headerStyle: {backgroundColor:ThemeStyle.tabBarBackgroundColor,elevation:0},
        headerTitleStyle: {color:'#fff'},
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions:{
        title:'',
        headerTintColor: 'white',
        headerStyle: {backgroundColor:ThemeStyle.tabBarBackgroundColor,elevation:0},
        headerTitleStyle: {color:'#fff'},
    }
  },
  BillingAddress: {
    screen: BillingAddress,
    navigationOptions:{
        title:'Billing Address',
        headerTintColor: 'white',
        headerStyle: {backgroundColor:ThemeStyle.tabBarBackgroundColor,elevation:0},
        headerTitleStyle: {color:'#fff'},
    }
  },
  MyOrders: {
    screen: MyOrders,
    navigationOptions:{
        title:'My Orders',
        headerTintColor: 'white',
        headerStyle: {backgroundColor:ThemeStyle.tabBarBackgroundColor,elevation:0},
        headerTitleStyle: {color:'#fff'},
    }
  },
  OrderDetail: {
    screen: OrderDetail,
    navigationOptions:{
        title:'Order Detail',
        headerTintColor: 'white',
        headerStyle: {backgroundColor:ThemeStyle.tabBarBackgroundColor,elevation:0},
        headerTitleStyle: {color:'#fff'},
    }
  },
  Checkout: {
    screen: Checkout,
    navigationOptions:{
        title:'Checkout',
        headerTintColor: 'white',
        headerStyle: {backgroundColor:ThemeStyle.tabBarBackgroundColor,elevation:0},
        headerTitleStyle: {color:'#fff'},
    }
  },
  Aboutus: {
    screen: Aboutus,
    navigationOptions:{
        title:'Aboutus',
        headerTintColor: 'white',
        headerStyle: {backgroundColor:ThemeStyle.tabBarBackgroundColor,elevation:0},
        headerTitleStyle: {color:'#fff'},
    }
  },

};

export default Routes;
