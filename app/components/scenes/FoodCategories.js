import React, { Component } from 'react';
import { StyleSheet,Text,View, FlatList, ScrollView, TouchableOpacity,Image,Dimensions, BackHandler, UIManager, Platform } from 'react-native';
import ThemeStyle from '../../styles/Theme';
import Icon from '../../common/icons';
import StarRating from 'react-native-star-rating';
// import ActionButton from 'react-native-action-button';
import {Goback} from '../../actions/goBack';

const {width,height} = Dimensions.get('window');

export default class FoodCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starCount    : 3.5,
      number       : 2,
      newListArray :
        [
        {
          "id"    : 1 ,
          product : 'Special Dosa',
          price   : '$16',
          image   : require('../../src/dosa.jpg'),
        },
        {
          "id"    : 2 ,
          product : 'Stuffied Idly',
          price   : '$16',
          image   : require('../../src/idly.jpg'),
        },
        {
          "id"    : 3 ,
          product : 'Mini Breakfast',
          price   : '$16',
          image   : require('../../src/vadai.jpg'),
        },
        {
          "id"    : 4 ,
          product : 'Ghee Pongal',
          price   : '$16',
          image   : require('../../src/pongal.jpg'),
        },
        {
          "id"    : 5 ,
          product : 'Special Mini Breakfast',
          price   : '$16',
          image   : require('../../src/breakfast.jpg'),
        },
      ]
    }
  }

  componentWillMount() {
    Goback.ComMount(this.props)
  }
  componentWillUnmount() {
    Goback.ComUnMount(this.props)
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  onIncrement(){
    this.setState({
      number:this.state.number+1,
    })
  }

  onDecrement(){
    this.setState({
      number:this.state.number-1,
    })
  }

  renderItems(rowData) {
    return(
      <TouchableOpacity>
        <View style={{margin:5,backgroundColor:'#fff',shadowOffset:{width:2,height:2},
          shadowOpacity:2,shadowColor:'grey',padding:5,elevation:2}}>
          <View style={{alignItems:'center'}}>
            <Image source={rowData.item.image} style={{width:width-15,height:160,resizeMode:'cover'}}/>
            <View style={{position:'absolute',top:0,right:0,bottom:125,left:310,backgroundColor:'rgba(0,0,0,0.42)',
              padding:2,alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity>
                <Icon name="heart" family="Feather" size={25} color = '#fff' />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingHorizontal:5}}>
            <View style={{flexDirection:'row',alignItems:'center',paddingVertical:5}}>
              <View style={{flex:1.5,flexDirection:'column',alignItems:'flex-start'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize:16,color:ThemeStyle.foodName,fontWeight:'bold'}}>{rowData.item.product}</Text>
                  <Text style={{fontSize:16,color:'#3d3d3d',fontWeight:'bold',marginLeft:5}}>{rowData.item.price}</Text>
                </View>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  starSize={15}
                  emptyStar={'star-o'}
                  fullStar={'star'}
                  halfStar={'star-half-empty'}
                  iconSet={'FontAwesome'}
                  fullStarColor={'orange'}
                  emptyStarColor={'lightgrey'}
                  rating={this.state.starCount}
                  selectedStar={(rating) => this.onStarRatingPress(rating)}
                />
              </View>
              <View style={{flex:1,alignItems:'flex-end'}}>
                <View style={{flexDirection:'row',alignItems:'center',marginLeft:50}}>
                  <View style={{backgroundColor:ThemeStyle.tabBarBackgroundColor,padding:3,borderRadius:20,marginRight:5,
                    overflow:'hidden'}}>
                    <TouchableOpacity onPress={this.onDecrement.bind(this)}>
                      <Icon name="minus" family="Feather" size={20} color = '#fff' />
                    </TouchableOpacity>
                  </View>
                  <Text style={{fontSize:16,paddingVertical:15,textAlign:'center'}}>{this.state.number}</Text>
                  <View style={{backgroundColor:ThemeStyle.tabBarBackgroundColor,padding:3,borderRadius:20,
                    marginLeft:5,overflow:'hidden'}}>
                    <TouchableOpacity onPress={this.onIncrement.bind(this)}>
                      <Icon name="plus" family="Feather" size={20} color = '#fff' />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={ThemeStyle.pageContainer}>
        <View style={{flex:1}}>
          <ScrollView>
              <FlatList
                data        = {this.state.newListArray}
                renderItem  = {this.renderItems.bind(this)}
                keyExtractor={(item, index) => item.id}
              />
          </ScrollView>
          {/* <ActionButton
                    buttonColor={ThemeStyle.IconColor}
                    ///icon={<Icon name="md-cut" style={styles.actionButtonIcon} />}
                    renderIcon={active => active ? (<Icon name="md-search" style={{ color:'blue', fontSize: 30 }} /> ) : (<Icon name="md-search" style={styles.actionButtonIcon} /> )}>
          </ActionButton> */}
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  actionButtonIcon:{
    color:'#fff',
  },
  textlist:{
    fontSize:16,
    fontWeight:'bold',
    marginLeft:20,
    color:'black'
  },
});
