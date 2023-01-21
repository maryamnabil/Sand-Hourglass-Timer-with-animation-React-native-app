import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Pressable,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import GeneralScreen from './generalScreen';
const GetStartedSection = ({navigation}) => {
    return (
      <View
        style={{
          backgroundColor: 'black',
          borderRadius: 5,
          marginStart: 30,
          marginEnd: 30,
          padding:10,
        }}>
        <Text style={{textAlign: 'center', color: 'white'}}>
          GET STARTED
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('DoItMyself')}>
          <Text style={styles.text}>DO IT MYSELF PLAN</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Customized')}>
          <Text style={styles.text}>CUSTOMIZED PLAN</Text>
        </Pressable>
      </View>
    );
  };

function GetStartedScreen({navigation}) {
    return (
      <View style={{flex: 1,backgroundColor:"white",paddingTop:50}}>
      <GetStartedSection navigation={navigation}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '60%',
      },
      button: {
        marginTop: 20,
        marginBottom:20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignSelf: 'center',
        backgroundColor: 'orange',
        width: '60%',
        marginBottom: 5,
    
      },
      text: {
        fontSize: 14,
        fontWeight: '400',
        color: 'white',
      },
      backbtn:{
        marginTop: 20,
        marginBottom:20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignSelf: 'center',
        backgroundColor: '#cccccc',
        width: '60%',
        marginBottom: 5,
        borderColor:"black",
        borderWidth:3
      },
      textback:{
        color:"black"
      }
  });

  export default GetStartedScreen;