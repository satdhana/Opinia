import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import ListButton from '../Component/List';

const Follower = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack('BottomTab')}>
          <Feather name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.profil}>Follower</Text>
        <View style={styles.icon}></View>
      </View>
      <ScrollView
        style={{padding: 20, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
        <ListButton text="Satria Dafa" />
        <ListButton text="Satria Dafa" />
        <ListButton text="Satria Dafa" />
        <ListButton text="Satria Dafa" />
        <ListButton text="Satria Dafa" />
        <ListButton text="Satria Dafa" />
        <ListButton text="Satria Dafa" />
        <ListButton text="Satria Dafa" />
        <ListButton text="Satria Dafa" />
        <ListButton text="Satria Dafa" />
        <ListButton text="Satria Dafa" />
        <ListButton text="Satria Dafa" />
        <ListButton text="Satria Dafa" />
        <ListButton text="Satria Dafa" />
        <ListButton text="Satria Dafa" />
      </ScrollView>
    </View>
  );
};
export default Follower;
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
