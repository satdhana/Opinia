import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const ListButton = props => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.contain}>
          <Image
            source={require('../Asset/Image/dafa.jpeg')}
            style={styles.img2}
          />
          <Text style={styles.text}>{props.text}</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text2}>Ikuti</Text>
        </View>
      </View>
    </View>
  );
};

export default ListButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FAFAF6',
    marginVertical: 8,
    alignItems: 'center',
  },
  contain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    color: '#333333',
    marginLeft: 15,
    fontWeight: 'bold',
  },
  text2: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    color: 'white',
  },
  img2: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  button: {
    width: 120,
    height: 35,
    backgroundColor: '#256D85',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

{
  /* <TextArrowButton
          text="Art"
          fungsi={() =>
            props.navigation.navigate('SortBy', {passing: 2, category: 'Art'})
          }
        /> */
}
