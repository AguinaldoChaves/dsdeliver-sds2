import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { OpenSans_300Light_Italic, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


function Header() {
  const navigation = useNavigation();

  const handleOnPress = () =>{
    navigation.navigate('Home');
  }
 
  return (
      <TouchableWithoutFeedback onPress={handleOnPress}>
        <View style={styles.container}>
          <Image source={require('../assets/logo.png')}/>
          <Text style={styles.text}>DS Delivery</Text>    
        </View>
      </TouchableWithoutFeedback>   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 140,
    padding: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -0.24,
    color: '#FFF',
    marginLeft: 15,
    fontFamily: 'OpenSans_700Bold'

  }
});
export default Header;