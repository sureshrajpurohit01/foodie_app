import React, {Component} from 'react';
import { StyleSheet,Text,Image,View,ScrollView,TouchableOpacity,Dimensions,Switch,Alert,TouchableHighlight,FlatList,Modal} from 'react-native';
import { StackNavigator} from 'react-navigation';
import ThemeStyle from '../../styles/Theme';
import STRINGS from '../../constants/STRINGS';
import Icon from '../../common/icons';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

const {width, height} = Dimensions.get('window');
const imagestyle = {width:250,height:250};
const slides = [
  {
    key: 'somethun1',
    title: 'Foodie',
    text: 'I\'m already out of descriptions',
    image: require('../../src/intro1.jpg'),
    imageStyle: imagestyle,
    backgroundColor: '#00a9c4',
  },
  {
    key: 'somethun',
    title: 'Foodie',
    text: 'Description.\nSay something cool',
    image: require('../../src/foodie.jpg'),
    imageStyle: imagestyle,
    backgroundColor: '#19962c',
  },
  {
    key: 'somethun-dos',
    title: 'Foodie',
    text: 'Other cool stuff Other cool stuff ',
    image: require('../../src/intro2.jpg'),
    imageStyle: imagestyle,
    backgroundColor: '#0c0c0c',
  },
  {
    key: 'somethun11',
    title: 'Foodie',
    text: 'I\'m already out of descriptions',
    image: require('../../src/intro3.jpg'),
    imageStyle: imagestyle,
    backgroundColor: '#ff7700',
  }
];

export default class StartScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // This is a function, to display next appinto image
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-arrow-round-forward" family="Ionicons" size={22} color="rgba(255, 255, 255, .9)" style={{ backgroundColor: 'transparent' }}/>
      </View>
    );
  }
  // This is a function, to go to login page
  _renderDoneButton = () => {
    return (
      <TouchableOpacity style={styles.buttonCircle} onPress={() => this.props.navigation.navigate('LoginScreen')}>
        <Icon name="md-checkmark" family="Ionicons" size={22} color="rgba(255, 255, 255, .9)" style={{ backgroundColor: 'transparent' }}/>
      </TouchableOpacity>
    );
  }

  render () {
    return(
      <View style={ThemeStyle.pageContainer}>
        <View style={{flex:5}}>
          <AppIntroSlider
            slides={slides}
            renderDoneButton={this._renderDoneButton}
            renderNextButton={this._renderNextButton}
          />
        </View>

        <View style={{flex:2}}>
          <LinearGradient colors={['#ff7700','#19962c','#00a9c4']} style={styles.linearGradient}>
            <View>
              <RaisedTextButton
                onPress={() => this.props.navigation.navigate("RegisterScreen")}
                title={STRINGS.SIGNUP}
                titleColor='#fff'
                style={ThemeStyle.buttonColor}
              />
            </View>
            <Text style={{color:'#FFF',textAlign:'center',fontSize:18}}>- - - - - - - - - - or - - - - - - - - - -</Text>
            <View>
              <RaisedTextButton
                onPress={() => this.props.navigation.navigate("LoginScreen")}
                title={STRINGS.SIGNIN}
                titleColor='#F53B50'
                style={[ThemeStyle.buttonColor,{backgroundColor:'#FFF'}]}
              />
            </View>
          </LinearGradient>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    height:40,
    backgroundColor: '#F53B50',
    borderColor: '#F53B50',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical:10,
    paddingHorizontal:10,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    elevation:1,
    margin:10
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal:15,
    justifyContent:'space-around'
  },
});
