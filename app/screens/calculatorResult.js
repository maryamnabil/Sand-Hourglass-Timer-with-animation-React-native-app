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
} from 'react-native';
import Header from '../components/Header';
import Timerc from '../components/timerc';

const CalculatorResultSection = ({navigation,TIDEE,SEX}) => {
  return (
    <View
      style={{
        borderRadius: 5,
        marginStart: 30,
        marginEnd: 30,
        padding: 10,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          fontSize: 18,
          fontWeight: '600',
        }}>
        CALCULATOR
      </Text>

      <View
        style={{
          margin: 5,
          backgroundColor: '#e4e4e4',
          padding: 20,
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <Text style={{color: 'black', fontSize: 16, flex: 1}}>YOUR TIDE</Text>
          <Text
            style={{
              backgroundColor: '#5bcc00',
              paddingHorizontal: 30,
              fontSize: 24,
              borderColor: 'black',
              borderRadius: 5,
              borderWidth: 2,
              fontWeight: 'Bold',
              textAlign: 'center',
              marginStart: 5,
              flex: 1,
            }}>
            {TIDEE}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <Text style={{color: 'black', fontSize: 16, flex: 1}}>
            Your Daily Target
          </Text>
          <Text
            style={{
              paddingHorizontal: 30,
              fontSize: 14,
              fontWeight: 'Bold',
              textAlign: 'center',
              marginStart: 5,
              flex: 3,
            }}>
            TO LOSE ONE POUND ().5 KG) A WEEK, YOUR DAILY CALORIC TARGET SHOULD
            BE APPROXIMATELY 500 CALORIES LESS THAN YOUR TOTAL DAILY ENERGY
            EXPENDITURE(TIDEE)
          </Text>
        </View>
      </View>
      <View
        style={{
          margin: 5,
          backgroundColor: 'orange',
          padding: 20,
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 5,
          alignContent:'center',
          alignSelf:'center'
        }}>
                    <Text style={{color: 'black', fontSize: 16,textAlign:'center'}}>
            HOURGLASS WILL GENERATE AN <Text style={{'color':'white'}}>ENTIRE DAILY PLAN</Text> FOR YOU THAT IS CUSTOMIZED FOR YOUR HEALTH,GOLAS,YOUR EATING HABBITS AND YOUR FITNESS LEVEL
          </Text>
          <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('CustomizedPlanCalculator',{
            TIDEE:TIDEE,
            SEX:SEX
          })}>
          <Text style={styles.text}>CUSTOMIZED PLAN</Text>
        </Pressable>
        </View>
    </View>
  );
};

function CalculatorRsultsScreen({navigation,route}) {
  const TIDEE = route.params.TIDEE;
  const SEX=route.params.SEX
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <CalculatorResultSection navigation={navigation} TIDEE={TIDEE} SEX={SEX} />
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
    backgroundColor: '#445392',
    width: '60%',
    marginBottom: 5,

  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  backbtn: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: '#cccccc',
    width: '60%',
    marginBottom: 5,
    borderColor: 'black',
    borderWidth: 3,
  },
  textback: {
    color: 'black',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default CalculatorRsultsScreen;
