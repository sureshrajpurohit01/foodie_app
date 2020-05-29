import React, {Component} from 'react';
import {Alert,StyleSheet,Text,View,TouchableOpacity,ScrollView,Dimensions,Image} from 'react-native';
import { StackNavigator} from 'react-navigation';
import ThemeStyle from '../../styles/Theme';
import STRINGS from '../../constants/STRINGS';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import { StatelessForm, InlineTextInput } from 'react-native-stateless-form'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { height, width } = Dimensions.get('window');


export default class LoginScreen extends Component{
  constructor(props) {
    super(props);

    this.state = {
      email     : '',
      password  : ""
    };
  }
  
  render () {
    const { email, password } = this.state
    const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    const passwordValid = (password && password.length >= 8 ? true : false)
    return(
      <View style={ThemeStyle.pageContainer}>
        <View style={{flex:1,position :"absolute",top:0,left:0,right:0,backgroundColor:'transparent'}}>
          <Image source={require('../../src/bg.jpg')}
          style={{resizeMode:'cover',width:null,height:Dimensions.get('window').height,opacity:0.7,backgroundColor:'#5b3717'}} />
        </View>
        <KeyboardAwareScrollView>
          <View style={{alignItems:'center',justifyContent:'center',paddingVertical:20}}>
            <Image source={require('../../src/pie.png')} style={{width:70,height:70,resizeMode:'contain'}}/>
            <Text style={{color:'#fff',textAlign:'center',fontSize:18,paddingVertical:10}}> Foodie </Text>
          </View>
          <View style={styles.social}>
            <TouchableOpacity>
              <SimpleLineIcons name="social-facebook" family="SimpleLineIcons" size={30} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity>
              <SimpleLineIcons name="social-twitter" family="SimpleLineIcons" size={30} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="mail" family="Feather" size={30} color="#FFF" />
            </TouchableOpacity>
          </View>
        <View style={styles.container}>
          <InlineTextInput
            label='Email'
            placeholder='Email Address'
            placeholderstyle={{color:'#fff'}}
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            style={{ borderColor: '#FFF',margin:20,borderRadius:20,borderWidth:1}}
            labelStyle={{ color: '#FFF' }}
            inputStyle={{ color: '#FFF' }}
            messageStyle={{ color: 'red' }}
            icon={ <Icon name={'mail-outline'} size={18} color={'#FFF'} /> }
            validIcon={ <Icon name='check' size={18} color='#ffee00' /> }
            invalidIcon={ <Icon name='clear' size={18} color='red' /> }
            value={email}
            valid={emailValid}
            message={email && !emailValid ? 'Please enter a valid email address' : null}
            onChangeText={(text) => { this.setState({email: text}) }}
            { ...this.props }
          />
          <InlineTextInput
            label='Password'
            placeholder='Password'
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={true}
            style={{ borderColor:'#FFF',margin:20,borderRadius:20,borderWidth:1 }}
            labelStyle={{ color: '#FFF' }}
            inputStyle={{ color: '#FFF' }}
            messageStyle={{ color: 'red' }}
            icon={ <Icon name={'vpn-key'} size={18} color={'#FFF'} /> }
            validIcon={ <Icon name='check' size={18} color='#ffee00' /> }
            invalidIcon={ <Icon name='clear' size={18} color='red' /> }
            value={password}
            valid={passwordValid}
            message={password && !passwordValid ? 'Password too short' : null}
            onChangeText={(text) => { this.setState({password: text}) }}
            { ...this.props }
          />
        </View>

        <View style={{paddingVertical:15}}>
          <RaisedTextButton
            onPress={() => this.props.navigation.navigate("tabNav")}
            title={STRINGS.LOGINTOMYACCOUNT}
            titleColor='#fff'
            style={[ThemeStyle.buttonColor,{marginLeft:20,marginRight:20}]}
          />
        </View>
        <TouchableOpacity style={{paddingVertical:15}}
          onPress={() => this.props.navigation.navigate("RegisterScreen")}>
          <Text style={{color:'#fff',textAlign:'center',fontSize:18}}> Cannot access your account ? </Text>
        </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>

    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'transparent',
  },
  social:{
    //flex:1,
    margin:5,
    paddingVertical:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    shadowColor:'grey',
    shadowOffset: {width:-0.3, height:0},
    shadowOpacity: 0.3,
    backgroundColor:'transparent',
    elevation:3
  },
});
