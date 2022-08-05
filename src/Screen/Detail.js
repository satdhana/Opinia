import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Detail = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack('BottomTab')}>
          <Feather name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.profil}>Detail</Text>
        <View style={styles.icon}></View>
      </View>
      <View
        style={{padding: 20, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
        <View>
          <Text style={styles.judul}>Pekerjaan</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather name="briefcase" size={25} color="#256D85" />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 20, color: '#100F0F'}}>Graphic Design</Text>
            <Text style={{fontSize: 18, color: '#100F0F'}}>Opinia</Text>
            <Text style={{fontSize: 16, color: '#100F0F'}}>
              (2008 -sekarang)
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{padding: 20, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
        <View>
          <Text style={styles.judul}>Pendidikan</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather name="award" size={25} color="#256D85" />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 20, color: '#100F0F'}}>
              Deisgn Engineering
            </Text>
            <Text style={{fontSize: 18, color: '#100F0F'}}>
              Politeknik Manufaktur Negeri Bandung
            </Text>
            <Text style={{fontSize: 16, color: '#100F0F'}}>(2011 - 2013)</Text>
          </View>
        </View>
      </View>
      <View
        style={{padding: 20, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
        <View>
          <Text style={styles.judul}>Tempat Tinggal</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather name="map-pin" size={25} color="#256D85" />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 20, color: '#100F0F'}}>Bekasi</Text>
            <Text style={{fontSize: 16, color: '#100F0F'}}>(2011 - 2013)</Text>
          </View>
        </View>
      </View>
      <View
        style={{padding: 20, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
        <View>
          <Text style={styles.judul}>Hobi</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather name="headphones" size={25} color="#256D85" />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 20, color: '#100F0F'}}>Musik</Text>
          </View>
        </View>
      </View>
      <View
        style={{padding: 20, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
        <View>
          <Text style={styles.judul}>Website</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather name="globe" size={25} color="#256D85" />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 20, color: '#100F0F'}}>
              www.asdsaaskflas.com
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Detail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#256D85',
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profil: {
    color: 'white',
    fontSize: 20,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 20,
  },
  judul: {
    color: '#256D85',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
