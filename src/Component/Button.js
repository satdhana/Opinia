import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const RoundButton = props => {
  return (
    <TouchableOpacity onPress={() => props.fungsi()}>
      <View style={{height: 80, alignItems: 'center'}}>
        <View
          style={[
            styles.button,
            {backgroundColor: props.bg ? props.bg : '#FFFFFF'},
          ]}>
          <Feather name={props.icon} size={25} color="#8FE3CF" />
        </View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },

  text: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 14,
    color: '#100F0F',
  },
});

{
  /* <Button
                bg="#279B24"
                text="Sign In"
                fungsi={() => {
                  props.navigation.navigate('Profile')
                }}
              /> */
}
