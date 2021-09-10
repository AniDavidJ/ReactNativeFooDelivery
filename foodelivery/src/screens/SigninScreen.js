import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Separator} from '../components';
import {Colors, Images, Fonts} from '../contants';

const SigninScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
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
          onPress={() => navigation.goback()}
        />
        <Text style={styles.headerTitle}>Sign In</Text>
      </View>
      <Text>Welcome</Text>
      <Text>Enter your username and password, and enjoy ordering food</Text>
      <View>
        <View>
          <Feather />
          <TextInput />
        </View>
      </View>
      <Separator />
      <View>
        <View>
          <Feather />
          <TextInput />
          <Feather />
        </View>
      </View>
      <Text></Text>
      <View>
        <View>
          <Text>Remember me</Text>
        </View>
        <Text>Forgot Password</Text>
      </View>
      <TouchableOpacity>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <View>
        <Text> Don't have an account</Text>
        <Text>Sign Up</Text>
      </View>
      <Text>OR</Text>
      <TouchableOpacity>
        <View>
          <View>
            <Image />
          </View>
        </View>
        <Text>Connect with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <View>
            <Image />
          </View>
        </View>
        <Text>Connect with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SigninScreen;

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
  },
});
