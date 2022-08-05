import React from 'react';
import {StyleSheet, View, Image, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../Asset/Image/opinia.png';

const SplashScreen = () => {
  return (
    <LinearGradient
      colors={['#8FE3CF', '#256D85', '#002B5B']}
      locations={[0, 0.65, 5.02]}
      style={{width: wp('100%'), height: hp('100%')}}>
      <StatusBar backgroundColor="#8FE3CF" barStyle="dark-content" />
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
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
});
