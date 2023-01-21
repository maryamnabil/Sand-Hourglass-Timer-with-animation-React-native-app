import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

import Header from '../components/Header';

const MealsSection = ({navigation}) => {
    return (
      <View>
      <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
        HOURGLASS MEAL DATABASE
      </Text>
      <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
        Select a range
      </Text>
      <View
          style={[
            {
              flexDirection: 'column',
              paddingHorizontal: 30,
              alignItems: 'center',
            },
          ]}>
                    <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('MealsDetails',{
            Bcal: "0", Ecal: "150"
          })}>
          <Text style={styles.text}> 0-150 cals</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('MealsDetails',{
            Bcal: "150", Ecal: "200"
          })}>
          <Text style={styles.text}> 150-200 cals</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('MealsDetails',{
            Bcal: "200", Ecal: "250"
          })}>
          <Text style={styles.text}> 200-250 cals</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('MealsDetails',{
            Bcal: "250", Ecal: "300"
          })}>
          <Text style={styles.text}> 250-300 cals</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('MealsDetails',{
            Bcal: "300", Ecal: "350"
          })}>
          <Text style={styles.text}> 300-350 cals</Text>
        </Pressable>  
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('MealsDetails',{
            Bcal: "350", Ecal: "400"
          })}>
          <Text style={styles.text}> 350-400 cals</Text>
        </Pressable>         
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('MealsDetails',{
            Bcal: "400", Ecal: "450"
          })}>
          <Text style={styles.text}> 400-450 cals</Text>
        </Pressable>  
        </View>
      </View>
    );
  };
function MealsScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
    <MealsSection navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        marginBottom:20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 15,
        alignSelf: 'center',
        backgroundColor: 'orange',
        width: '60%',
        marginBottom: 5,
        borderWidth:3,
        borderColor:'black'
    
      },
      text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
      },
  });

export default MealsScreen;
