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
import PhoneInput from 'react-native-phone-input';
import ModalPickerImage from './ModalPickerImage';
import CheckBox from 'react-native-check-box';
import {Goback} from '../../actions/goBack';

const { height, width } = Dimensions.get('window');

export default class RegisterScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email     : '',
      password  : "",
      confirmpassword : "",
      pickerData: null,
    };
    this.onPressFlag = this.onPressFlag.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
  }
 
  onClick() {
    console.log();
  }
  componentWillMount() {
    Goback.ComMount(this.props)
  }
  componentWillUnmount() {
    Goback.ComUnMount(this.props)
  }
  componentDidMount() {
    this.setState({
      pickerData: this.refs.phone.getPickerData(),
    });
  }
  // This is the function, that helps to display all the available countries in a modal
  onPressFlag() {
    this.refs.myCountryPicker.open();
  }
  // This is the function, that sets the selected country
  selectCountry(country) {
    this.refs.phone.selectCountry(country.iso2);
  }

  render () {
    const { email, password,confirmpassword } = this.state
    const emailValid           = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    const passwordValid        = (password && password.length >= 8 ? true : false)
    const confirmpasswordValid = (confirmpassword && confirmpassword.length >= 8 ? true : false)
    return(
      <View style={ThemeStyle.pageContainer}>
        <View style={{flex:1,position :"absolute",top:0,left:0,right:0,backgroundColor:'transparent'}}>
          <Image source={require('../../src/bg.jpg')}
          style={{resizeMode:'cover',width:null,height:Dimensions.get('window').height,opacity:0.6,backgroundColor:'#5b3717'}} />
        </View>
        <KeyboardAwareScrollView>
          <View style={{alignItems:'center',justifyContent:'center',paddingVertical:15}}>
            <Image source={require('../../src/salad.png')} style={{width:70,height:70,resizeMode:'contain'}}/>
            <Text style={{color:'#fff',textAlign:'center',fontSize:18,paddingVertical:15}}> Foodie </Text>
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
            <View style={styles.phone}>
              <PhoneInput
                ref='phone'
                onPressFlag={this.onPressFlag}
                initialCountry="in"
                textStyle={{textAlign:'center',color:'#fff'}}
                textProps={{placeholder:'Enter a phone number'}}
                //offset={15}
                //style={{paddingVertical:10, paddingHorizontal:5}}
                value=''
              />
              <ModalPickerImage
                ref='myCountryPicker'
                data={this.state.pickerData}
                onChange={(country)=>{ this.selectCountry(country) }}
                cancelText='Cancel'
              />
            </View>
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
            <InlineTextInput
              label='Confirm Password'
              placeholder='Retype Password'
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
              value={confirmpassword}
              valid={confirmpasswordValid}
              message={confirmpassword && !confirmpasswordValid ? 'Password too short' : null}
              onChangeText={(text) => { this.setState({confirmpassword: text}) }}
              { ...this.props }
            />
          </View>

        <View style={{flexDirection:'row',paddingVertical:10,paddingHorizontal:15}}>
          <View style={{flex:0.5,alignItems:'center',justifyContent:'center'}}>
            <CheckBox checkBoxColor={"#FFF"} style={{padding:10}} onClick={()=>this.onClick()} isChecked={false} />
          </View>
          <View style={{flex:3,alignItems:'flex-start',justifyContent:'center'}}>
            <Text style={{fontSize:14,color:'#fff',flexWrap:'wrap',}}>I Agree with terms & condition.</Text>
          </View>
        </View>

        <View style={{paddingVertical:15}}>
          <RaisedTextButton
            onPress={() => this.props.navigation.navigate("tabNav")}
            title={STRINGS.CREATEACCOUNT}
            titleColor='#fff'
            style={[ThemeStyle.buttonColor,{marginLeft:20,marginRight:20}]}
          />
        </View>
        <TouchableOpacity style={{paddingVertical:15}}
          onPress={() => this.props.navigation.navigate("LoginScreen")}>
          <Text style={{color:'#fff',textAlign:'center',fontSize:16}}> Already have an account ? SIGN IN </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:20,
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
  phone: {
    alignItems: 'center',
    padding: 15,
    backgroundColor:'transparent',
    borderRadius:20,
    borderWidth:1,
    borderColor:'#fff',
    margin:20
    },
});
