import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../Asset/Image/opinia.png';

const SplashScreen = props => {
  return (
    <LinearGradient
      colors={['#8FE3CF', '#256D85', '#002B5B']}
      locations={[0, 0.65, 5.02]}
      style={{width: wp('100%'), height: hp('100%')}}>
      <StatusBar backgroundColor="#8FE3CF" barStyle="dark-content" />
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={{paddingVertical: 50}}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.txtbutton}
            onPress={() => {
              props.navigation.navigate('LogIn');
            }}>
            Masuk
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.txtbutton}
            onPress={() => {
              props.navigation.navigate('SignUp');
            }}>
            Daftar
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: wp('60%'),
    height: hp('40%'),
    resizeMode: 'contain',
  },
  button: {
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#8FE3CF',
    height: hp('7'),
    width: wp('90'),
    justifyContent: 'center',
    borderRadius: 10,
  },
  txtbutton: {
    color: '#256D85',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
