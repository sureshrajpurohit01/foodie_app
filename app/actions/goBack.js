import {  BackHandler } from 'react-native';
/** for go back working */
var Goback={};
Goback.ComMount = (props) => {
    console.log('mount',props.navigation.isFocused())
    BackHandler.addEventListener('hardwareBackPress', async ()=>{ await props.navigation.pop()});
}

Goback.ComUnMount = (props) => {

    if(props.navigation.isFocused()===true && (props.navigation.state.key=='TabItem1' || props.navigation.state.key=='TabItem5'))
    {
        return false;   
    }
    else
    {
        BackHandler.removeEventListener('hardwareBackPress', async ()=>{ await props.navigation.pop()});
    }
}


export {Goback};