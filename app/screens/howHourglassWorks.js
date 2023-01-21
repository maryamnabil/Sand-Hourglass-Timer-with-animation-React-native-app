import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import GeneralScreen from './generalScreen';


const HowHourGlassWorksSection = () => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        borderRadius: 5,
        marginStart: 30,
        marginEnd: 30,
        padding:5,
      }}>
      <Text style={{textAlign: 'center', color: 'white'}}>
        HOW HOURGLASS WORKS
      </Text>
      <Text style={{textAlign: 'left', color: 'white',fontSize:11,padding:5}}>
      the basic philosophy of the hourglass plan is simple. the hg plan is
        designed to encourage eating more often during the day so you eliminate
        spikes in hunger. 
      </Text>
      <Text style={{textAlign: 'left', color: 'white',fontSize:11,padding:5}}>
      by encouraging eating more often, the hourglass plans
        turns snacking throughout the day-- the largest obstacle to losing
        weight in traditional diets --into an advantage
      </Text>
    </View>
  );
};
function HowHourGlassWorksScreen({navigation}) {
  const Screen = () => {
    return <View style={{flex: 1, backgroundColor: 'white',paddingTop:50
  }}>
      <HowHourGlassWorksSection />
      <Pressable
          style={styles.backbtn}
          onPress={() => navigation.popToTop()}>
          <Text style={styles.textback}>Back</Text>
        </Pressable>
    </View>
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white',paddingTop:50
  }}>
      <HowHourGlassWorksSection />
      <Pressable
          style={styles.backbtn}
          onPress={() => navigation.popToTop()}>
          <Text style={styles.textback}>Back</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default HowHourGlassWorksScreen;
