import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import logo from '../Asset/Image/opinia.png';
const LogIn = props => {
  const [nama, setNama] = useState();
  const [pass, setPass] = useState();
  const data = {
    username: nama,
    password: pass,
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#256D85" barStyle="dark-content" />
      <Image source={logo} style={styles.logo} />
      <View style={styles.contain}>
        <Text style={styles.txt}>Hai,</Text>
        <Text style={styles.txt2}>Selamat Datang</Text>
        <TextInput
          onChangeText={e => setNama(e)}
          value={nama}
          style={styles.textInput}
          placeholder="Nama"
        />
        <TextInput
          onChangeText={e => setPass(e)}
          value={pass}
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="Password"
        />
        <Pressable
          style={styles.akun}
          onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={styles.txt3}>Belum punya akun? Buat akun!</Text>
        </Pressable>
        <TouchableOpacity
          onPress={() => {
            // Datae()
          }}
          style={styles.button}>
          <Text
            style={styles.txtbutton}
            onPress={() => {
              props.navigation.navigate('BottomTab', data);
            }}>
            Masuk
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogIn;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#256D85',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    flex: 1,
  },
  logo: {
    width: wp('40%'),
    flex: 0.4,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  contain: {
    backgroundColor: '#E8FFFF',
    flex: 0.6,
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  txt: {
    fontSize: 20,
    color: '#213E3B',
    marginVertical: 10,
  },
  txt2: {
    fontSize: 25,
    color: '#213E3B',
    fontWeight: 'bold',
  },
  txt3: {
    fontSize: 15,
    color: '#213E3B',
    marginVertical: 10,
  },
  textInput: {
    height: hp('6'),
    width: wp('90'),
    fontSize: hp('2%'),
    color: '#213E3B',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    elevation: 5,
    marginVertical: 20,
  },
  akun: {
    alignItems: 'flex-end',
  },
  button: {
    alignSelf: 'center',
    marginVertical: hp(5),
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
