import React from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import {Display} from '../utils';
import {Fonts, Colors, Images} from '../contants';

const WelcomeCard = ({title, image, content}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Images[image]} resizeMode="contain" />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Display.setWidth(100),
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(60),
  },
  titleText: {
    fontSize: 22,
    fontFamily: Fonts.POPPINS_BLOD,
  },
  contentText: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_LIGHT,
    textAlign: 'center',
    padding: 15
  },
});
