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
import Header from '../components/Header';

const CustomizedFitnessPlan = ({navigation}) => {
  return (
    <View
      style={{
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
        CUSTOMIZED PLAN
      </Text>
    </View>
  );
};

function CustomizedFitnessPlanScreen({navigation,route}) {
  const minMdc=route.params.minMdc;
  const maxMdc=route.params.maxMdc;
  const firstlow=route.params.firstlow;
  const firsthigh=route.params.firsthigh;
  const lateMorninglow= route.params.lateMorninglow;
  const lateMorninghigh= route.params.lateMorninghigh;
  const secondlow= route.params.secondlow;
  const secondhigh= route.params.secondhigh;
  const afternoonLow= route.params.afternoonLow;
  const afternoonHigh= route.params.afternoonHigh;
  const thirdlow= route.params.thirdlow;
  const thirdhigh= route.params.thirdhigh;
  const dessertlow= route.params.dessertlow;
  const desserthigh= route.params.desserthigh;
  const firstRankedMeal=route.params.firstRankedMeal;
  const secondRankedMeal=route.params.secondRankedMeal;
  const thirdRankedMeal=route.params.thirdRankedMeal;
  return (
    <View style={{flex: 1,backgroundColor:'white'}}>
      <CustomizedFitnessPlan />
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <View
          style={[
            {
              flexDirection: 'column',
              paddingHorizontal: 30,
              alignItems: 'center',
              flex: 2,
            },
          ]}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
            {firstRankedMeal}
          </Text>
          <Text
            style={{
              backgroundColor: 'orange',
              padding: 10,
              borderRadius: 5,
              borderColor: 'black',
              borderWidth: 2,
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            {firstlow}-{firsthigh} cals
          </Text>
          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold',textAlign:'center'}}>
            LATE MORNING MEAL
          </Text>
          <Text
            style={{
              backgroundColor: 'orange',
              padding: 10,
              borderRadius: 5,
              borderColor: 'black',
              borderWidth: 2,
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            {lateMorninglow}-{lateMorninghigh} cals
          </Text>
          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
            {secondRankedMeal}
          </Text>
          <Text
            style={{
              backgroundColor: 'orange',
              padding: 10,
              borderRadius: 5,
              borderColor: 'black',
              borderWidth: 2,
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            {secondlow}-{secondhigh} cals
          </Text>
          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
            AFTERNOON MEAL
          </Text>
          <Text
            style={{
              backgroundColor: 'orange',
              padding: 10,
              borderRadius: 5,
              borderColor: 'black',
              borderWidth: 2,
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            {afternoonLow}-{afternoonHigh} cals
          </Text>
          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
            {thirdRankedMeal}
          </Text>
          <Text
            style={{
              backgroundColor: 'orange',
              padding: 10,
              borderRadius: 5,
              borderColor: 'black',
              borderWidth: 2,
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            {thirdlow}-{thirdhigh} cals
          </Text>
          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
            DESSERT
          </Text>
          <Text
            style={{
              backgroundColor: 'orange',
              padding: 10,
              borderRadius: 5,
              borderColor: 'black',
              borderWidth: 2,
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
            }}>
            {dessertlow}-{desserthigh} cals
          </Text>
          <Text
            style={{
              backgroundColor: '#e4e4e4',
              padding: 5,
              borderRadius: 5,
              borderColor: 'black',
              borderWidth: 2,
              fontSize: 16,
              color: '#445392',
              fontWeight: 'bold',
              marginVertical:40,
              textAlign:'center'
            }}>
            Daily Target Range {minMdc}-{maxMdc} Cals
          </Text>
        </View>
        <View
          style={[
            {
              flexDirection: 'column',
              paddingHorizontal: 10,
              flex: 2,
            },
          ]}>
          <View
            style={{
              margin: 5,
              backgroundColor: '#e4e4e4',
              padding: 5,
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 5,
            }}>
            <Text style={{fontSize:12}}>After finishing each meal flip hourglass over</Text>
            <Text style={{fontSize:12}}>
              While sand is pouring hydrate well and avoid additional food until
              next planned meal
            </Text>
          </View>
          <View
            style={{
              margin: 5,
              backgroundColor: '#e4e4e4',
              padding: 5,
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 5,
            }}>
            <Text style={{fontSize:12}}>
              These are target calorie ranges ,some meals will beat or meet your
              target, some meal you will come close , some meals ...oh well, get
              right back on plan , enjoy the process !
            </Text>
          </View>
          <View
            style={{
              margin: 5,
              backgroundColor: '#e4e4e4',
              padding: 5,
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 5,
            }}>
            <Text style={{fontSize:12}}>
                Eat slowly enjoy your food what is the rush? Food is to be savouredflip the hourglass after you finish the meal
            </Text>
            <Text style={{fontSize:12}}>
                The six meals together after the hourglass flips should take about 12 hours
            </Text>
          </View> 
          <View
            style={{
              margin: 5,
              backgroundColor: '#e4e4e4',
              padding: 5,
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 5,
            }}>
            <Text style={{fontSize:12}}>
               After your last meal avoid taking any food or drinks (other than water) until you start the next day's breakfast, this should take about 12 hours
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 20,
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
  container: {
    padding: 20,
    borderRadius: 10,
    flex: 1,
  },
  touchable: {
    flex: 1,
    backgroundColor: 'white',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    marginBottom: 30,
  },
  innerTextContainer: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
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
});

export default CustomizedFitnessPlanScreen;
