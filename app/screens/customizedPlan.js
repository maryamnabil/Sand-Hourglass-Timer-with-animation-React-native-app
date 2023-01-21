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
import Timerc from '../components/timerc';

const Customized = ({navigation}) => {
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
        CHOOSE A PLAN
      </Text>
    </View>
  );
};

function CustomizedPlanScreen({navigation}) {
  return (
    <View style={{flex: 1,backgroundColor:'white'}}>
      <Customized />
      <View
        style={[
          styles.container,
          {
            flexDirection: 'column',
          },
        ]}>
        <TouchableOpacity
          style={[styles.touchable, {backgroundColor: '#6b81bd'}]}
          onPress={() => navigation.navigate('Calculator')}>
          <View
            style={[
              {
                flexDirection: 'row',
              },
            ]}>
            <Text
              style={[
                styles.innerTextContainer,
                {flex: 1, fontWeight: 'bold'},
              ]}>
              Free
            </Text>
            <View style={{flex: 3}}>
              <Text style={[styles.innerTextContainer, {fontWeight: 'bold'}]}>
                $0/month
              </Text>
              <Text
                style={[
                  styles.innerTextContainer,
                  {fontSize: 14, textAlign: 'left'},
                ]}>
                The tools you need to get healthy :
              </Text>
              <Text>
                <Text style={{color: '#16c60c'}}>▶</Text> Virtual Hourglass
              </Text>
              <Text>
                <Text style={{color: '#16c60c'}}>▶</Text> Do It Myself Plan
              </Text>
              <Text>
                <Text style={{color: '#16c60c'}}>▶</Text> Hourglass Calculator
              </Text>
              <Text
                style={[
                  styles.innerTextContainer,
                  {fontWeight: 'bold', paddingTop: 5},
                ]}>
                Choose Free
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touchable, {backgroundColor: 'orange'}]}
          onPress={() => navigation.navigate('Calculator')}>
          <View
            style={[
              {
                flexDirection: 'row',
              },
            ]}>
            <Text
              style={[
                styles.innerTextContainer,
                {flex: 1, fontWeight: 'bold'},
              ]}>
              PREMIUM
            </Text>
            <View style={{flex: 3}}>
              <Text style={[styles.innerTextContainer, {fontWeight: 'bold'}]}>
                $6/month
              </Text>
              <Text
                style={[
                  styles.innerTextContainer,
                  {fontSize: 14, textAlign: 'left'},
                ]}>
                Everthing in FREE plus :
              </Text>
              <Text>
                <Text style={{color: '#16c60c'}}>▶</Text> Customized Plan
              </Text>
              <Text>
                <Text style={{color: '#16c60c'}}>▶</Text> Dietian Q&A(limited
                access)
              </Text>
              <Text>
                <Text style={{color: '#16c60c'}}>▶</Text> Meal Ideas(limited
                access)
              </Text>
              <Text
                style={[
                  styles.innerTextContainer,
                  {fontWeight: 'bold', paddingTop: 5},
                ]}>
                Choose Premium
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touchable, {backgroundColor: '#c1c9e5'}]}
          onPress={() => navigation.navigate('CustomizedFitnessPlan')}>
          <View
            style={[
              {
                flexDirection: 'row',
              },
            ]}>
            <Text
              style={[
                styles.innerTextContainer,
                {flex: 1, fontWeight: 'bold'},
              ]}>
              PLATINUM
            </Text>
            <View style={{flex: 3}}>
              <Text style={[styles.innerTextContainer, {fontWeight: 'bold'}]}>
                $15/month
              </Text>
              <Text
                style={[
                  styles.innerTextContainer,
                  {fontSize: 14, textAlign: 'left'},
                ]}>
                Everthing in FREE & PREMIUM plus :
              </Text>
              <Text>
                <Text style={{color: '#16c60c'}}>▶</Text> Ask Dietian Personal
                questions
              </Text>
              <Text>
                <Text style={{color: '#16c60c'}}>▶</Text> Dietian Q&A(full
                access)
              </Text>
              <Text>
                <Text style={{color: '#16c60c'}}>▶</Text> Meal Ideas(full
                access)
              </Text>
              <Text>
                <Text style={{color: '#16c60c'}}>▶</Text> Fitness Guide
              </Text>
              <Text
                style={[
                  styles.innerTextContainer,
                  {fontWeight: 'bold', paddingTop: 5, paddingBottom: 5},
                ]}>
                Choose Platinum
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
    fontSize: 15,
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

export default CustomizedPlanScreen;
