import React, { Component } from 'react';
import { StyleSheet,Text,View, FlatList, ScrollView, TouchableOpacity,Image,Dimensions } from 'react-native';
import ThemeStyle from '../../styles/Theme';
import Icon from '../../common/icons';
import StarRating from 'react-native-star-rating';
import {Goback} from '../../actions/goBack';

const {width,height} = Dimensions.get('window');

export default class WishList extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        starCount: 3.5,
        newListArray :
            [
            {
              "id"    : 1 ,
              product : 'Chocolate Donut',
              flavor  : 'Chocolate flavor',
              price   : '$16',
              image   : require('../../src/donut1.jpeg'),
            },
            {
              "id"    : 2 ,
              product : 'Jelly Donut',
              flavor  : 'Jelly flavor',
              price   : '$16',
              image   : require('../../src/donut2.jpeg'),
            },
            {
              "id"    : 3 ,
              product : 'Marble-Frosted Donut',
              flavor  : 'Marble-Frosted flavor',
              price   : '$16',
              image   : require('../../src/donut3.jpeg'),
            },
            {
              "id"    : 4 ,
              product : 'Blueberry Donut',
              flavor  : 'Blueberry flavor',
              price   : '$16',
              image   : require('../../src/donut4.jpg'),
            },
            {
              "id"    : 5 ,
              product : 'Rosted Nuts Chocolate',
              flavor  : 'Chocolate flavor',
              price   : '$16',
              image   : require('../../src/IceCream.jpg'),
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

    renderItems(rowData) {
        var swipeoutBtns = [
                               {text: 'Delete',backgroundColor:ThemeStyle.foodName,type:'delete'}
                           ]
        return(
            // <Swipeout right={swipeoutBtns} backgroundColor = '#fff' sensitivity = {100}>
            // <TouchableOpacity>
                <View style={{margin:5,backgroundColor:'#fff',shadowOffset:{width:0.2,height:0.2},
                    shadowOpacity:0.2,shadowColor:'black',padding:5,elevation:2}}>
                    <View style={{flexDirection:'row',justifyContent:'flex-end',marginBottom:-5}}>
                        <TouchableOpacity style={{padding:5}}>
                            <Icon name="heart" family="Feather" size={25} color = {ThemeStyle.IconColor} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:4,elevation:3}}>
                            <Image source={rowData.item.image} style={{width:120,height:120,resizeMode:'contain'}}/>
                        </View>
                        <View style={{flex:6}}>
                            <View style={{flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start',marginTop:5}}>
                                <Text style={{fontSize:16,color:ThemeStyle.foodName,fontWeight:'bold',paddingVertical:5}}>{rowData.item.product}</Text>
                                <Text style={{fontSize:16,color:'black',paddingVertical:3}}>{rowData.item.flavor}</Text>
                                <Text style={{fontSize:16,color:'black',fontWeight:'bold',paddingVertical:3}}>{rowData.item.price}</Text>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{fontSize:12,color:'black',paddingVertical:3}}>Rating : </Text>
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
                            </View>
                        </View>
                    </View>
                </View>
            // </TouchableOpacity>
            // </Swipeout>
        );
    }

    render() {
        return (
            <View style={ThemeStyle.pageContainer}>
              <ScrollView>
                  <FlatList
                    data        = {this.state.newListArray}
                    renderItem  = {this.renderItems.bind(this)}
                    keyExtractor={(item, index) => index}
                  />
              </ScrollView>
            </View>
        );
    }
}
