import React ,{useEffect} from "react";
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Colors,Images ,Fonts} from "../contants";
import {Display} from "../utils";

const SplashScreen = ({navigation}) => {
useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Welcome');
    }, 3000);
  
}, [])

    return (
        <View style={styles.container}>
         <StatusBar barStyle="light-content" backgroundColor={Colors.DEFAULT_GREEN} translucent/>
            <Image source={Images.PLATE} resizeMode="contain" style={styles.image}/>
            <Text style={styles.titleText}>Food Delivery</Text>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.DEFAULT_GREEN
    },
    image:{
        width: Display.setWidth(60),
        height: Display.setHeight(30),
    },
    titleText:{
        color: Colors.DEFAULT_WHITE,
        fontSize:32,
        fontFamily:Fonts.POPPINS_LIGHT,
    }
})

