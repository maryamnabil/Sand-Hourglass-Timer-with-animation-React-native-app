import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

const Footer = ({navigation}) => {
    return (
        <View style={styles.footer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('LookInside')}>
          <Text style={styles.text}>GET STARTED</Text>
        </Pressable>       
      </View>
    );
  };


function HomeScreen({navigation}) {
  return (
    <View style={styles.homeView}>
    <Footer navigation={navigation}/>
  </View>
  );
}



const styles = StyleSheet.create({
  homeView:{
    backgroundColor:"white",
    height:"100%",
    flex:1
  },
  button: {
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth:2,
    borderColor:"black",
    alignSelf: 'center',
    backgroundColor: 'transparent',
    width: '60%',
    marginBottom: 5,

  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  footer:{
    backgroundColor:"white",
    paddingTop:50
  }
});

export default HomeScreen;
