import React, { Component } from 'react';
import { StyleSheet,Text,View, FlatList, ScrollView, TouchableOpacity,Image,Dimensions, LayoutAnimation, UIManager, Platform } from 'react-native';
import ThemeStyle from '../../styles/Theme';
import Icon from '../../common/icons';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import StepIndicator from 'react-native-step-indicator';
import {Goback} from '../../actions/goBack';

const {width,height} = Dimensions.get('window');

const labels = ["Order has been placed","Order has been cooked","Order has been delivered",];

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: ThemeStyle.IconColor,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: ThemeStyle.IconColor,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: ThemeStyle.IconColor,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: ThemeStyle.IconColor,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: ThemeStyle.IconColor,
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: ThemeStyle.IconColor
}

export default class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage:0,
            newListArray : [
                {
                  "id"     : 1 ,
                  product  : 'Chocolate Donut',
                  orderId  : 'FID 0001',
                  price    : '$16',
                  Quantity : 5,
                  image    : require('../../src/donut1.jpeg'),
                },
                {
                  "id"     : 2 ,
                  product  : 'Jelly Donut',
                  orderId  : 'FID 0002',
                  price    : '$16',
                  image    : require('../../src/donut2.jpeg'),
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
    // this is custom function. No need to use..
    onPageChange(position){
        this.setState({currentPosition: position});
    }

    renderItems(rowData) {
        return(
                <View style={{margin:5,padding:5}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                        <View style={{flex:0.3}}>
                            <Image source={rowData.item.image} style={{width:50,height:50,borderRadius:50/2}}/>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{fontSize:14,color:'black'}}>{rowData.item.product} ({rowData.item.orderId})</Text>
                        </View>
                        <Text style={{fontSize:14,color:'black'}}>{rowData.item.price}</Text>
                    </View>
                </View>
        );
    }

    render() {
        return (
            <View style={ThemeStyle.pageContainer}>
                <Text style={{fontSize:20,color:ThemeStyle.IconColor,paddingVertical:5,textAlign:'center'}}>FID-02563</Text>
                <View style={styles.container}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={this.state.currentPosition}
                        labels={labels}
                        stepCount={3}
                    />
                </View>
                <View style={{flex:1.5,justifyContent:'center'}}>
                    <ScrollView>
                        <View style={{padding:5}}>
                            <Text style={{fontSize:16,color:ThemeStyle.IconColor,paddingVertical:20}}>Delivery Info</Text>
                            <View style={{flexDirection:'row',alignItems:'center',padding:5,paddingBottom:10}}>
                                <Icon name="location-pin" family="SimpleLineIcons" size={20} color = {ThemeStyle.IconColor} />
                                <Text style={{fontSize:14,color:'black',marginLeft:10,padding:2}}>No.14,old MTH Road,Thirumullaivoyal,Chennai-62.</Text>
                            </View>
                            <View style={{width:1,height:22,backgroundColor:ThemeStyle.IconColor,position:'absolute',marginLeft:20,marginTop:88,zIndex:5}}></View>
                            <View style={{flexDirection:'row',alignItems:'center',padding:5}}>
                                <Icon name="home" family="SimpleLineIcons" size={20} color = {ThemeStyle.IconColor} />
                                <Text style={{fontSize:14,color:'black',marginLeft:10,padding:2}}>No.65,Saidapet,Chennai-49.</Text>
                            </View>
                        </View>
                        <View style={{padding:5}}>
                            <Text style={{fontSize:16,color:ThemeStyle.IconColor,paddingVertical:10}}>Food Info</Text>
                            <FlatList
                              data        = {this.state.newListArray}
                              renderItem  = {this.renderItems.bind(this)}
                              keyExtractor={(item, index) => item.id}
                            />
                        </View>
                        <View style={{padding:5}}>
                            <Text style={{fontSize:16,color:ThemeStyle.IconColor,paddingVertical:10}}>Billing Info</Text>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center',margin:5,padding:5}}>
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
                    </ScrollView>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        justifyContent:'center'
    },
    stepIndicator: {
        marginVertical:50,
    },
    page: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    SummaryListText : {
        fontSize:16,
        color:'black',
        paddingVertical:3
    }
})
