import React, {Component} from 'react';
import { StyleSheet,Text,Image,View,ScrollView,TouchableOpacity,Dimensions,Switch,Alert,TouchableHighlight,FlatList,Modal} from 'react-native';
import { StackNavigator} from 'react-navigation';
import ThemeStyle from '../../styles/Theme';
import STRINGS from '../../constants/STRINGS';
import Icon from '../../common/icons';
//import MapView from 'react-native-maps';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import {Goback} from '../../actions/goBack';

const {width,height}  = Dimensions.get('window');

const latitudeDelta   = 0.02632;
const longitudeDelta  = 0.03632;
const latitude        = 13.0106;
const longitude       = 80.1932;

export default class Restaurant extends Component{
  constructor(props) {
    super(props);
    this.state = {
      restaurantListArray:[
        {
          rating    : '3.5',
          name      : 'Golden Chick',
          miles     : '0.24 miles',
          address   : '10G,North high way,2nd south street,New york',
          food      : 'Burgers,Pizza,Tandori,Sandwich'
        },
        {
          rating    : '4',
          name      : 'Famous Dave',
          miles     : '0.34 miles',
          address   : '55,New street,Virginia',
          food      : 'Burgers,Pizza,Sandwich'
        },
        {
          rating    : '5',
          name      : 'Damon\'s Grill',
          miles     : '0.45 miles',
          address   : 'Southern road,John crew street,New jersy',
          food      : 'Pizza,Tandori,Sandwich'
        },
        {
          rating    : '4.5',
          name      : 'Bob Evans Restaurants',
          miles     : '1 miles',
          address   : '4735B,Patherol Road,3rd Fiber street,Canada',
          food      : 'Pizza,Tandori'
        },
      ],
    };
  }
  componentWillMount() {
    Goback.ComMount(this.props)
  }
  componentWillUnmount() {
    Goback.ComUnMount(this.props)
  }
  // this is a functions to list restauants with this design model
  renderRestaurantListItems(rowData) {
    return(
      <View style={styles.listContainer}>
        <View style={{flex:0.5,backgroundColor:'#FFF',paddingVertical:10,paddingHorizontal:10,borderRightWidth:0.5,borderColor:'lightgrey'}}>
          <Text numberOfLines={1} style={{textAlign:'center',fontSize:14,color:'#555'}}>Ratings</Text>
          <Text numberOfLines={1} style={{textAlign:'center',fontSize:25,color:'#FF9D1E',fontWeight:'bold'}}>{rowData.item.rating}</Text>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("RestaurantInfoScreen")}
          style={{flex:2,backgroundColor:'#FFF',paddingVertical:10,paddingHorizontal:10,borderRightWidth:0.5,borderColor:'lightgrey'}}>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Text numberOfLines={2} style={{fontSize:14,color:'#3d3d3d',fontWeight:'bold'}}>{rowData.item.name}</Text>
            </View>
            <View style={{flex:0.5,flexDirection:'row'}}>
              <Icon name="location-pin" family="SimpleLineIcons" size={15} color ='grey' />
              <Text numberOfLines={1} style={{fontSize:12,color:'grey'}}>{rowData.item.miles}</Text>
            </View>
          </View>
          <Text numberOfLines={1} style={{fontSize:12,color:'grey'}}>{rowData.item.address}</Text>
          <Text numberOfLines={1} style={{fontSize:12,color:'#3d3d3d'}}>{rowData.item.food}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={{flex:0.4,backgroundColor:'#FFF',paddingVertical:10,paddingHorizontal:10,alignItems:'center',justifyContent:'center'}}>
          <Icon name="arrow-left-circle" family="SimpleLineIcons" size={30} color = '#F53B50' />
        </TouchableOpacity> */}
      </View>
    );
  }

  render () {
    return(
      <View style={ThemeStyle.pageContainer}>
        <View style={{flexDirection:'row',paddingVertical:10,alignItems:'center',justifyContent:'center'}}>
          <View>
            <RaisedTextButton
              //onPress={() => this.props.navigation.navigate("")}
              title={STRINGS.NEARBYYOU}
              titleColor='#fff'
              style={[ThemeStyle.buttonColor,{borderRadius:0,width:165}]}
            />
          </View>
          <View>
            <RaisedTextButton
              //onPress={() => this.props.navigation.navigate("")}
              title={STRINGS.TOPRATED}
              titleColor={ThemeStyle.textColor}
              style={[ThemeStyle.buttonColor,{backgroundColor:'#FFF',borderRadius:0,width:165}]}
            />
          </View>
        </View>
        <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity>
            <Image source={require('../../src/map1.png')} style={{resizeMode:'cover',width:Dimensions.get('window').width,height:290}} />
          </TouchableOpacity>
        </View>
        <View style={{flex:1.5,backgroundColor:'transparent',}}>
          <FlatList
            data        = {this.state.restaurantListArray}
            renderItem  = {this.renderRestaurantListItems.bind(this)}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer:{
    flexDirection:'row',
    backgroundColor:'#FFF',
    borderBottomWidth:0.5,
    borderColor:'lightgrey',
    //elevation:1,
    //margin:2
  },
  map: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});
