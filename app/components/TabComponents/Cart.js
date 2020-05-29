import React, { Component } from 'react';
import { StyleSheet,Text,View, FlatList, ScrollView, TouchableOpacity,Image,Dimensions, LayoutAnimation, UIManager, Platform } from 'react-native';
import ThemeStyle from '../../styles/Theme';
import Icon from '../../common/icons';
import StarRating from 'react-native-star-rating';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import {Goback} from '../../actions/goBack';

const {width,height} = Dimensions.get('window');

export default class Cart extends Component {
  constructor(props) {
    super(props);
    // if( Platform.OS === 'android' )
    //   {
    //     UIManager.setLayoutAnimationEnabledExperimental(true);
    //   }
    this.state = {
      textLayoutHeight: 0,
      updatedHeight: 0,
      expand: false,
      buttonText : 'Click Here To Expand',
      image   : require('../../src/up-arrow.png'),
      starCount    : 3.5,
      number       : 10,
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
  // This is a function that executes while pressing star press
  onStarRatingPress(rating) {
      this.setState({
        starCount: rating
      });
  }
  // This is a function that executes while pressing increment press
  onIncrement(){
    this.setState({
      number:this.state.number+1,
    })
  }
  // This is a function that executes while pressing decrement press
  onDecrement(){
    this.setState({
      number:this.state.number-1,
    })
  }
  // This is a function that executes while pressing show cart extend buttons
  expand_collapse_Function =()=>
  {
      LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );

      if( this.state.expand == false )
      {
          this.setState({
            updatedHeight: this.state.textLayoutHeight,
            expand: true,
            buttonText: 'Click Here To Collapse',
            image  : require('../../src/down-arrow.png'),
          });
      }
      else
      {
          this.setState({
            updatedHeight: 0,
            expand: false,
            buttonText: 'Click Here To Expand',
            image   : require('../../src/up-arrow.png'),
          });
      }
  }

  getHeight(height)
  {
    this.setState({ textLayoutHeight: height });
  }

  renderItems(rowData) {
    return(
      <View style={{margin:5,justifyContent:'center',}}>
        <View style={{position:'absolute',top:18,right:0,left:0,bottom:0,shadowOffset:{width:3,height:3},
          shadowOpacity:3,shadowColor:'grey',zIndex:1,height:90,width:80,backgroundColor:'#fff',
          alignItems:'center',justifyContent:'center',borderRadius:20,elevation:5}}>
          <Image source={rowData.item.image} style={{width:60,height:80,resizeMode:'contain'}}/>
        </View>
        <View style={{zIndex:-1,margin:5,backgroundColor:'#fff',shadowOffset:{width:-3,height:3},
          shadowOpacity:5,shadowColor:'grey',elevation:2,padding:5,marginLeft:30,marginRight:30,borderRadius:12}}>
          <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:5}}>
            <View style={{flex:1,flexWrap:'wrap'}}>
              <Text style={{fontSize:16,color:ThemeStyle.foodName,fontWeight:'bold',paddingVertical:5}} numberOfLines={3} multiLine={true}>{rowData.item.product}</Text>
            </View>
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
        <View style={{position:'absolute',top:17,right:15,bottom:0,shadowOffset:{width:-3,height:3},
          shadowOpacity:3,shadowColor:'grey',elevation:5,height:90,width:40,backgroundColor:'#fff',
          alignItems:'center',justifyContent:'center',borderRadius:20,}}>
          <View>
            <TouchableOpacity style={{top:5}} onPress={this.onIncrement.bind(this)}>
              <Icon name="plus" family="Feather" size={20} color = '#C33C54' />
            </TouchableOpacity>
            <Text numberOfLines={1} style={{fontSize:14,paddingVertical:15,textAlign:'center'}}>{this.state.number}</Text>
            <TouchableOpacity style={{bottom:5}} onPress={this.onDecrement.bind(this)}>
              <Icon name="minus" family="Feather" size={20} color = '#C33C54' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
        <TouchableOpacity activeOpacity = {0.7} onPress = { this.expand_collapse_Function }
          style = { styles.TouchableOpacityStyle }>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',paddingVertical:10,backgroundColor:'#fcf4d6',
            borderTopLeftRadius:20,borderTopRightRadius:20,shadowOffset:{width:-3,height:-2},shadowOpacity:3,shadowColor:'grey',elevation:5,
            borderWidth:1,borderColor:ThemeStyle.IconColor}}>
            <Text style={{fontSize:16,fontWeight:'bold',color:"#3d3d3d"}}>Shopping Cart Summary</Text>
            <Image source={this.state.image} style={{width:20,height:20}}/>
          </View>
        </TouchableOpacity>

        <View style = {{ height: this.state.updatedHeight,overflow:'hidden' }}>
          <View style = { styles.ExpandViewInsideText }
            onLayout = {( value ) => this.getHeight( value.nativeEvent.layout.height )}>
            <View style={{width:width,height:150,paddingHorizontal:20,paddingVertical:15}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:1,alignItems:'flex-start'}}>
                  <Text style={styles.SummaryListText}>Number of items </Text>
                  <Text style={styles.SummaryListText}>Subtotal </Text>
                  <Text style={styles.SummaryListText}>Tax </Text>
                  <Text style={styles.SummaryListText}>Total </Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end'}}>
                  <Text style={styles.SummaryListText}>3</Text>
                  <Text style={styles.SummaryListText}>$ 50</Text>
                  <Text style={styles.SummaryListText}>$ 12</Text>
                  <Text style={styles.SummaryListText}>$ 62</Text>
                </View>
              </View>
              <View style={{alignItems:'flex-end',paddingVertical:10}}>
                <RaisedTextButton
                  onPress={() => this.props.navigation.navigate('Checkout')}
                  title={STRINGS.CHECKOUT}
                  titleColor='#fff'
                  style={ThemeStyle.buttonColor}
                />
              </View>
            </View>
          </View>
        </View>


        {/* <TouchableOpacity activeOpacity = { 0.7 }
                              onPress = { this.expand_collapse_Function }
                              style = { styles.TouchableOpacityStyle }>
                <Text style = { styles.TouchableOpacityTitleText }>{this.state.buttonText}</Text>
            </TouchableOpacity>
            <View style = {{ height: this.state.updatedHeight, overflow: 'hidden' }}>
                <Text style = { styles.ExpandViewInsideText }
                      onLayout = {( value ) => this.getHeight( value.nativeEvent.layout.height )}>
                    Hello Developers, A warm welcome on ReactNativeCode.com, The best website for react native developers.
                    You can find high quality dynamic type of tutorials with examples on my website and to support us please like our Facebook page.
                </Text>
            </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
  ChildView: {
    borderWidth: 1,
    borderColor: '#00BCD4',
    margin: 5
  },
  TouchableOpacityStyle: {
    // padding: 10,
    // backgroundColor: '#00BCD4'
  },
  TouchableOpacityTitleText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20
  },
  ExpandViewInsideText: {
    height:200,
    width:null
  },
  SummaryListText : {
    fontSize:14,
    color:'#3d3d3d',
    paddingVertical:3
  }
});
