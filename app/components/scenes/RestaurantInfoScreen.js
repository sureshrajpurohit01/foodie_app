import React, {Component} from 'react';
import { StyleSheet,Text,Image,View,ScrollView,TouchableOpacity,Dimensions,Switch,Alert,TouchableHighlight,FlatList,Modal} from 'react-native';
import { StackNavigator} from 'react-navigation';
import ThemeStyle from '../../styles/Theme';
import STRINGS from '../../constants/STRINGS';
import Icon from '../../common/icons';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import {Goback} from '../../actions/goBack';

const {width,height}  = Dimensions.get('window');

export default class RestaurantInfoScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isRestaurantInfo  : true,
      isRatingInfo      : true,
      ratingListArray : [
        {
          image     : require('../../src/food.jpg'),
          name      : 'Bob Evans Restaurants',
          address   : '4735B,Patherol Road,3rd Fiber street,Canada',
          rating    : '2.5',
        },
        {
          image     : require('../../src/food2.jpg'),
          name      : 'Charlie Brown\'s Fresh Grill',
          address   : 'Southern road,John crew street,New jersy',
          rating    : '4.5',
        },
        {
          image     : require('../../src/breakfast.jpg'),
          address   : 'Damon\'s Grill',
          address   : '550B,Kevins Road,3rd Fiber street,Washington',
          rating    : '5',
        },
        {
          image     : require('../../src/noodles.jpg'),
          name      : 'Famous Dave',
          address   : 'Southern road,John crew street,New jersy',
          rating    : '3.5',
        },
        {
          image   : require('../../src/deal.jpg'),
          name      : 'Golden Chick',
          address   : '55,New street,Virginia',
          rating    : '4',
        }
      ],
    };
  }
  componentWillMount() {
    Goback.ComMount(this.props)
  }
  componentWillUnmount() {
    Goback.ComUnMount(this.props)
  }
 
  // This is a function, that executes while press on Restaurant Info
  onPressRestaurantInfo(){
    this.setState({isRatingInfo:false,isRestaurantInfo:true});
  }
  // This is a function, that executes while press on Rating Info
  onPressRatingInfo(){
    this.setState({isRatingInfo:true,isRestaurantInfo:false});
  }
  // This is a function , that helps to render ratings using this design..
  renderRatingList(rowData) {
    return(
      <View style={styles.listContainer}>
        <View style={{paddingVertical:10,paddingHorizontal:10}}>
          <Image source={rowData.item.image} style={{width:100,height:100,resizeMode:'contain'}}/>
        </View>
        <View style={{flex:2,alignItems:'flex-start',paddingVertical:10,paddingHorizontal:10,justifyContent:'space-between'}}>
          <View>
            <Text numberOfLines={2} style={{fontSize:14,color:'#3d3d3d',fontWeight:'bold'}}>{rowData.item.name}</Text>
            <Text numberOfLines={2} style={{fontSize:12,color:'grey'}}>{rowData.item.address}</Text>
          </View>
          <View>
            <RaisedTextButton
              //onPress={() => this.props.navigation.navigate("")}
              title={STRINGS.RATINGS}
              titleColor={ThemeStyle.textColor}
              style={[ThemeStyle.buttonColor,{backgroundColor:'#FFF',width:100,height:30}]}
            />
          </View>
        </View>
        <View style={{flex:0.5,paddingVertical:10,paddingHorizontal:10,alignItems:'center',justifyContent:'center'}}>
          <Icon name="star" family="FontAwesome" size={30} color="#FF9D1E" />
          <Text numberOfLines={1} style={{textAlign:'center',fontSize:25,color:'#3d3d3d',fontWeight:'bold'}}>{rowData.item.rating}</Text>
        </View>
      </View>
    );
  }

  // renderImagesList(rowData) {
  //   return(
  //     <View  style={{flexDirection:'row',paddingVertical:10,paddingHorizontal:10,flexWrap:'wrap'}}>
  //       <Image source={rowData.item.image} style={styles.gridImage}/>
  //     </View>
  //   );
  // }

  render () {
    var galleryImages = [];
    for(var i=0;i<10;i++){
        galleryImages.push(
          <View>
            <Image source={require('../../src/noodles.jpg')} style={styles.gridImage}/>
          </View>
        );
    }
    return(
      <View style={ThemeStyle.pageContainer}>
        <View style={{flexDirection:'row',paddingVertical:10,alignItems:'center',justifyContent:'center'}}>
          <View>
            <RaisedTextButton
              onPress={() => this.onPressRestaurantInfo()}
              title={STRINGS.RESTAURANTINFO}
              titleColor='#fff'
              style={[ThemeStyle.buttonColor,{borderRadius:0,width:165}]}
            />
          </View>
          <View>
            <RaisedTextButton
              onPress={() => this.onPressRatingInfo()}
              title={STRINGS.RATINGS}
              titleColor={ThemeStyle.textColor}
              style={[ThemeStyle.buttonColor,{backgroundColor:'#FFF',borderRadius:0,width:165}]}
            />
          </View>
        </View>
        <ScrollView>
          {this.state.isRestaurantInfo ? (
            <View>
              <View style={styles.addressView}>
                <Text numberOfLines={2} style={{fontSize:18,color:'#3d3d3d',fontWeight:'bold'}}>New Restaurant Cafe</Text>
                <Text numberOfLines={2} style={{fontSize:14,color:'grey'}}>162 A,North Eastern Road,New Jersy</Text>
              </View>
              <View style={{flexDirection:'row',paddingVertical:10,paddingHorizontal:10,flexWrap:'wrap'}}>
                {galleryImages}
              </View>
            </View>
            // <View>
            //   <FlatList
            //     data        = {this.state.imageListArray}
            //     renderItem  = {this.renderImagesList.bind(this)}
            //     keyExtractor={(item, index) => index}
            //     //horizontal = {true}
            //     showsHorizontalScrollIndicator={false}
            //     showsVerticaltalScrollIndicator={false}
            //   />
            // </View>
            ) : (
            <View>
              <FlatList
                data        = {this.state.ratingListArray}
                renderItem  = {this.renderRatingList.bind(this)}
                keyExtractor={(item, index) => index}
              />
            </View>
          )}
        </ScrollView>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="phone-call" family="Feather" size={28} color={ThemeStyle.IconColor} />
            <Text style={{textAlign:'center',fontSize:14,color:ThemeStyle.IconColor}}>Call now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="location-pin" family="SimpleLineIcons" size={30} color={ThemeStyle.IconColor} />
            <Text style={{textAlign:'center',fontSize:14,color:ThemeStyle.IconColor}}>View on map</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="star" family="SimpleLineIcons" size={30} color={ThemeStyle.IconColor}/>
            <Text style={{textAlign:'center',fontSize:14,color:ThemeStyle.IconColor}}>Reviews</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomContainer:{
    flexDirection:'row',
    backgroundColor:'#FFF',
    borderTopWidth:0.5,
    borderColor:'lightgrey'
  },
  addressView:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
  },
  iconContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:15,
  },
  listContainer:{
    flexDirection:'row',
    backgroundColor:'#FFF',
    elevation:1,
    margin:3
  },
  gridImage:{
    width:160,
    height:160,
    resizeMode:'cover',
    margin:5,
    //borderWidth:1,
    //borderColor:"#F53B50",
  }
});
