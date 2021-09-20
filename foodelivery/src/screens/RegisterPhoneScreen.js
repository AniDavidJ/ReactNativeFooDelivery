import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import {Colors, Fonts, CountryCode} from '../contants';
import {Display} from '../utils';
import {Separator, FlagItem} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StaticImageService} from '../services';

const getDropdownStyle =(y) => ({...styles.countryDropdown,top : y + 60})

const RegisterPhoneScreen = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState(
    CountryCode.find(country => country.name === 'India'),
  );
  const [inputsContainerY, setInputsContainerY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownLayout, setDropdownLayout] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");

  const closeDropdown =(pageX, pageY) => {
    if (isDropdownOpen){
      if (pageX < dropdownLayout?.x ||
      pageX > dropdownLayout?.x + dropdownLayout?.width ||
      pageY < dropdownLayout?.y ||
      pageY > dropdownLayout?.y + dropdownLayout?.height
      ){
        setIsDropdownOpen(false);
      }
    }
  }

  return (
    <View style={styles.container} onStartShouldSetResponder={({nativeEvent:{pageX, pageY}}) =>
    closeDropdown(pageX, pageY)
    }>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.pop()}
        />
        <Text style={styles.headerTitle}>Login Into Food House</Text>
      </View>
      <Text style={styles.title}>
        Enter your registered phone number to log in
      </Text>
      {/* <Text>Phone Number</Text> */}
      <View style={styles.inputContiner} onLayout={({nativeEvent: { layout : {y}, }, }) => setInputsContainerY(y)}>
        <TouchableOpacity style={styles.countryListContainer} onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
          <Image
            source={{uri: StaticImageService.getFlagIcon(selectedCountry.code)}}
            style={styles.flagIcon}
          />
          <Text style={styles.countryCodeText}>
            {selectedCountry.dial_code}
          </Text>
          <MaterialIcons name="keyboard-arrow-down" size={18} />
        </TouchableOpacity>
        <View style={styles.phoneInputContainer}>
          <TextInput placeholder="Phone Number" 
          placeholderTextColor={Colors.DEFAULT_GREY}
          selectionColor={Colors.DEFAULT_GREY}
          keyboardType="number-pad"
          onFocus={() => setIsDropdownOpen(false)}
          style={styles.inputText}
          onChangeText={(text)=> setPhoneNumber(selectedCountry?.dial_code + text)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.signinButton} activeOpacity={0.8} onPress={()=>
                      {
                        navigation.navigate('Verification',{phoneNumber})}}>
        <Text
          style={styles.signinButtonText}>
          Coutinue
        </Text>
      </TouchableOpacity>
      {isDropdownOpen && (
      <View style={getDropdownStyle(inputsContainerY)} 
      onLayout={({nativeEvent:{
        layout:{x, y, height, width},
      },})=>
        setDropdownLayout({x,y, height, width})}> 
      <FlatList data={CountryCode} 
                keyExtrator={(item) => item.code }
                renderItem ={({item})=> <FlagItem {...item} onPress={(country) => {
                  setSelectedCountry(country)
                  setIsDropdownOpen(false)
                }}/>}
                />
      </View>
      )
      } 
    </View>
  );
};

export default RegisterPhoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  inputContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 50,
  },
  countryListContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    width: Display.setWidth(22),
    marginRight: 10,
    borderRadius: 8,
    height: Display.setHeight(6),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    flexDirection: 'row',
  },
  phoneInputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: 'center',
    height: Display.setHeight(6),
    flex: 1,
  },
  flagIcon: {
    height: 20,
    width: 20,
  },
  countryCodeText: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  countryDropdown:{
    backgroundColor: Colors.LIGHT_GREY,
    position: 'absolute',
    width: Display.setWidth(80),
    height: Display.setHeight(50),
    marginLeft: 20,
    borderRadius:10,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    zIndex: 3,
  },
  inputText:{
    fontSize: 18,
    textAlignVertical :'center',
    padding: 0,
    height: Display.setHeight(6),
    color: Colors.DEFAULT_BLACK,
  },  signinButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    fontFamily: Colors.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
  },
});
