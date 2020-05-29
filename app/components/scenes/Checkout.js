import React, { Component } from 'react';
import { StyleSheet,Text,View, FlatList, ScrollView, TouchableOpacity,Image,Dimensions, LayoutAnimation, UIManager, Platform } from 'react-native';
import ThemeStyle from '../../styles/Theme';
import Icon from '../../common/icons';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import {CreditCardInput} from 'react-native-credit-card-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import Popup from 'react-native-popup';
import {Goback} from '../../actions/goBack';

const {width,height} = Dimensions.get('window');

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newListArray : [
        {
          "id"     : 1 ,
          image    : require('../../src/donut1.jpeg'),
          count    :  2,
        },
        {
          "id"     : 2 ,
          image    : require('../../src/donut2.jpeg'),
          count    :  4,
        },
        {
          "id"     : 3 ,
          image    : require('../../src/donut3.jpeg'),
          count    :  1,
        },
        {
          "id"     : 4 ,
          image    : require('../../src/donut4.jpg'),
          count    :  7,
        },
        {
          "id"     : 5 ,
          image    : require('../../src/IceCream.jpg'),
          count    :  2,
        },
      ],
    }
  }
 
  onSelect(index, value){
    this.setState({ index:index,value:value })
  }
  componentWillMount() {
    Goback.ComMount(this.props)
  }
  componentWillUnmount() {
    Goback.ComUnMount(this.props)
  }
  _onChange = formData => {
    console.log(JSON.stringify(formData, null, " "));
  };

  _onFocus = field => {
    console.log(field);
  };

  onSubmitPress() {
    // this.props.navigation.navigate('HomePage');
    this.popup.tip({
      content: 'Your order has been successfully submitted',
      btn: {
        text: 'OK',
        style: {
          color:ThemeStyle.textColor
        },
        callback: () => {
          this.props.navigation.navigate("tabNav");
        },
      },
    });
  }

  renderItems(rowData) {
    return(
      <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
        <Image source={rowData.item.image} style={{width:60,height:60,borderRadius:60/2}}/>
        <View style={{position:'absolute',top:0,right:0,bottom:35,left:35,backgroundColor:'rgba(0,0,0,0.42)',
          alignItems:'center',justifyContent:'center',borderRadius:15}}>
          <Text style={{color:"#fff",fontSize:12}}>{rowData.item.count}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={ThemeStyle.pageContainer}>
        <KeyboardAwareScrollView>
            <View style={{padding:5}}>
                <Text style={{fontSize:16,color:ThemeStyle.IconColor,paddingVertical:5}}>Order Items</Text>
                <FlatList
                  data        = {this.state.newListArray}
                  renderItem  = {this.renderItems.bind(this)}
                  horizontal = {true}
                  showsHorizontalScrollIndicator={false}
                  showsVerticaltalScrollIndicator={false}
                  keyExtractor={(item, index) => item.id}
                />
            </View>
            <View style={{padding:5}}>
                <Text style={{fontSize:16,color:ThemeStyle.IconColor,paddingVertical:10}}>Billing Info</Text>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                   <View style={{flex:1,flexDirection:'column',alignItems:'flex-start'}}>
                       <Text style={styles.SummaryListText}>Number of items </Text>
                       <Text style={styles.SummaryListText}>Subtotal </Text>
                       <Text style={styles.SummaryListText}>Tax </Text>
                       <Text style={styles.SummaryListText}>Total </Text>
                   </View>
                   <View style={{flex:1,flexDirection:'column',alignItems:'flex-end'}}>
                       <Text style={styles.SummaryListText}>2</Text>
                       <Text style={styles.SummaryListText}>$ 32</Text>
                       <Text style={styles.SummaryListText}>$ 10</Text>
                       <Text style={styles.SummaryListText}>$ 42</Text>
                   </View>
               </View>
            </View>
            <View style={{padding:5}}>
                <Text style={{fontSize:16,color:ThemeStyle.IconColor,paddingVertical:10}}>Delivery At</Text>
                <View style={{flexDirection:'row',alignItems:'center',padding:5,paddingBottom:10}}>
                    <Icon name="location-pin" family="SimpleLineIcons" size={20} color = {ThemeStyle.IconColor} />
                    <Text style={{fontSize:14,color:'black',marginLeft:10,padding:2}}>No.14,old MTH Road,Thirumullaivoyal,Chennai-62.</Text>
                </View>
            </View>
            <View style={{padding:5}}>
                <Text style={{fontSize:16,color:ThemeStyle.IconColor,paddingVertical:10}}>Payment Info</Text>
                <RadioGroup
                    size={24}
                    thickness={2}
                    color={ThemeStyle.IconColor}
                    // highlightColor='#ccc8b9'
                    // selectedIndex={1}
                    onSelect = {(index, value) => this.onSelect(index, value)}
                  >
                    <RadioButton value={'item1'} >
                      <Text>COD(Cash On Delivery)</Text>
                    </RadioButton>

                    <RadioButton value={'item2'}>
                      <Text>CREDIT CARD</Text>
                    </RadioButton>
                </RadioGroup>
                {this.state.index == 1 ? (
                    <View style={styles.container}>
                        <CreditCardInput
                        autoFocus
                        requiresName
                        requiresCVC
                        requiresPostalCode
                        labelStyle={styles.label}
                        inputStyle={styles.input}
                        validColor={"#E6A422"}
                        invalidColor={"red"}
                        placeholderColor={"darkgray"}
                        onFocus={this._onFocus}
                        onChange={this._onChange} />
                    </View>
                ):(
                  null
                )}
            </View>
        </KeyboardAwareScrollView>
        <View style={{marginTop:0}}>
            <RaisedTextButton
              onPress={this.onSubmitPress.bind(this)}
              title={STRINGS.SUBMIT}
              titleColor='#FFF'
              style={[ThemeStyle.buttonColor,{borderRadius:0}]}
            />
        </View>
        {/* <Popup ref={popup => this.popup = popup } isOverlayClickClose ={false}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SummaryListText : {
    fontSize:16,
    color:'black',
    paddingVertical:3
  },
  container:{
    margin:5,
    backgroundColor:'white',
    elevation:3,
    shadowOffset:{width:0,height:1.5},
    shadowOpacity:0.2,
    shadowColor:'black',
    padding:10
  },
})
