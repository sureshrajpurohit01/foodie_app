import React, { Component } from 'react';
import { StyleSheet,Text,View, FlatList, ScrollView, TouchableOpacity,Image,Dimensions,TextInput } from 'react-native';
import GridView from "react-native-easy-grid-view";
import Icon from '../../common/icons';
import ThemeStyle from '../../styles/Theme';
// import CornerLabel from 'react-native-smart-corner-label';
import {Goback} from '../../actions/goBack';

const {width,height} = Dimensions.get('window');

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        var ds = new GridView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            text : '',
            dataSource: ds.cloneWithCells([
                {
                    text   : 'BreakFast',
                    image  : require('../../src/breakfast.jpg'),
                }
                , {
                    text   : 'Oatmeal',
                    image  : require('../../src/Oatmeal.jpg'),

                }, {
                    text   : 'IceCream',
                    image  : require('../../src/IceCream.jpg'),

                }, {
                    text   : 'Veggie Wrap',
                    image  : require('../../src/Veggie-Wrap.jpg'),

                }, {
                    text   : 'Biryani',
                    image  : require('../../src/biryani.jpg'),

                }, {
                    text   : 'Coffee',
                    image  : require('../../src/CoffeeCup.jpg'),

                },{
                    text   : 'Noodles',
                    image  : require('../../src/noodles.jpg'),

                },
                {
                    text   : 'Dinner',
                    image  : require('../../src/food2.jpg'),

                },], 2),
            cellWidth: 0,
            cellHeight: 0
        };
    }
    componentWillMount() {
        Goback.ComMount(this.props)
      }
      componentWillUnmount() {
        Goback.ComUnMount(this.props)
      }
    _renderCell(cell) {
        return <View onLayout={event => {
          var width = event.nativeEvent.layout.width;
         if(this.state.cellWidth!=width){
         this.setState({cellWidth:width})
         }
         if(this.state.cellHeight!=width){
         this.setState({cellHeight:width})
         }
     }} style={{margin:10,marginLeft:10}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('FoodCategories')}>
            <View style={{justifyContent:'center',backgroundColor:'white',width:this.state.cellWidth,height:this.state.cellHeight,overflow: 'hidden',}}>
                <Image source={cell.image} style={{width:this.state.cellWidth,height:this.state.cellHeight,position:"relative",resizeMode:'cover'}}/>
                <View style={{position:'absolute',bottom:0,right:0,left:0,backgroundColor:'rgba(250,245,245,0.8)',paddingVertical:5}}>
                    <Text style={{textAlign:'center',color:ThemeStyle.foodName,fontSize:14,fontWeight:'bold'}}>{cell.text}</Text>
                </View>
                {/* <CornerLabel
                    cornerRadius={54}
                    alignment={'right'}
                    style={{backgroundColor: ThemeStyle.foodName, height: 15,}}
                    textStyle={{color: '#fff', }}>
                    30% off
                  </CornerLabel> */}
            </View>
            </TouchableOpacity>
        </View>//rgb(135,124,104) rgb(209,69,93)
    }

  render() {
    return (
        <View style={ThemeStyle.pageContainer}>
            <View style={{paddingVertical:20,marginTop:25,alignItems:'center',borderColor:'#C33C54',borderWidth:1,
                justifyContent:'center',marginLeft:20,marginRight:20,borderRadius:20}}>
                <View style={{flex:0.5,flexDirection:'row',alignItems:'center',paddingLeft:15}}>
                    <Icon name="search" family="Feather" size={20} color = '#C33C54' />
                    <TextInput
                        style={{height:40,width:300,paddingHorizontal:5,fontSize:14,}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        underlineColorAndroid='transparent'
                        placeholder='Search by food'
                        placeholderTextColor="grey"
                    />
                </View>
            </View>
            <ScrollView>
                <View style={{flex:1,marginTop:5}}>
                    <GridView dataSource={this.state.dataSource}
                              spacing={6}
                              style={{padding:16}}
                              renderCell={this._renderCell.bind(this)}

                    />
                </View>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    mainContainer : {
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-around'
    },
    cardContainer : {
        flexDirection:'column',
        alignItems:'center',
        width:100,
        height:100,
        margin:5,
        justifyContent:'center',
        shadowOpacity:0.5,
        shadowOffset:{width:0.5,height:0.5},
        shadowColor:'#C33C54'
    },
    weekdayText : {
        fontSize:16,
        color:'black',
        paddingVertical:5,
        fontWeight:'bold'
    },
    workingStatus : {
        fontSize : 12,
        color : 'black',
        marginLeft:5,
        textAlign:'center'
    },
    expContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent:'center',
    },

})
