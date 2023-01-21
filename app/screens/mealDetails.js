import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';

import Header from '../components/Header';

const MealsDetailsSection = ({navigation, Bcal, Ecal}) => {
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
        HOURGLASS MEAL DATABASE
      </Text>
      <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
        {Bcal} - {Ecal} cals
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={[
            {
              flexDirection: 'column',
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              paddingHorizontal: 30,
            },
          ]}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}
            onPress={() =>
              navigation.navigate('MealsDetailedView', {
                Bcal: Bcal,
                Ecal: Ecal,
                title: 'Medeterian',
                uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
              })
            }>
            <Image
              source={{
                uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
              }}
              style={{width: 100, height: 100, marginTop: 20}}
            />
            <Text
              style={{
                marginBottom: 20,
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Medeterian
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}
            onPress={() =>
              navigation.navigate('MealsDetailedView', {
                Bcal: Bcal,
                Ecal: Ecal,
                title: 'Vegeterian',
                uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
              })
            }>
            <Image
              source={{
                uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
              }}
              style={{width: 100, height: 100, marginTop: 20}}
            />
            <Text
              style={{
                marginBottom: 20,
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Vegeterian
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}
            onPress={() =>
              navigation.navigate('MealsDetailedView', {
                Bcal: Bcal,
                Ecal: Ecal,
                title: 'Snacks and desserts',
                uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
              })
            }>
            <Image
              source={{
                uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
              }}
              style={{width: 100, height: 100, marginTop: 20}}
            />
            <Text
              style={{
                marginBottom: 20,
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Snacks and desserts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}
            onPress={() =>
              navigation.navigate('MealsDetailedView', {
                Bcal: Bcal,
                Ecal: Ecal,
                title: 'Quick Service',
                uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
              })
            }>
            <Image
              source={{
                uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
              }}
              style={{width: 100, height: 100, marginTop: 20}}
            />
            <Text
              style={{
                marginBottom: 20,
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Quick Service
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            {
              flexDirection: 'column',
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              paddingHorizontal: 30,
            },
          ]}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}
            onPress={() =>
              navigation.navigate('MealsDetailedView', {
                Bcal: Bcal,
                Ecal: Ecal,
                title: 'Keto',
                uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
              })
            }>
            <Image
              source={{
                uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
              }}
              style={{width: 100, height: 100, marginTop: 20}}
            />
            <Text
              style={{
                marginBottom: 20,
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Keto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}
            onPress={() =>
              navigation.navigate('MealsDetailedView', {
                Bcal: Bcal,
                Ecal: Ecal,
                title: 'Paleo',
                uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
              })
            }>
          <Image
            source={{
              uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
            }}
            style={{width: 100, height: 100, marginTop: 20}}
          />
          <Text
            style={{
              marginBottom: 20,
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Paleo
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}
            onPress={() =>
              navigation.navigate('MealsDetailedView', {
                Bcal: Bcal,
                Ecal: Ecal,
                title: 'Meal Replacment',
                uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
              })
            }>
          <Image
            source={{
              uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
            }}
            style={{width: 100, height: 100, marginTop: 20}}
          />
          <Text
            style={{
              marginBottom: 20,
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Meal Replacment
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}
            onPress={() =>
              navigation.navigate('MealsDetailedView', {
                Bcal: Bcal,
                Ecal: Ecal,
                title: 'Beverages ',
                uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
              })
            }>
          <Image
            source={{
              uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
            }}
            style={{width: 100, height: 100, marginTop: 20}}
          />
          <Text
            style={{
              marginBottom: 20,
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Beverages
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
function MealsDetailsScreen({navigation, route}) {
  const Ecal = route.params.Ecal;
  const Bcal = route.params.Bcal;
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: '30%'}}>
      <MealsDetailsSection navigation={navigation} Ecal={Ecal} Bcal={Bcal} />
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
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: 'orange',
    width: '60%',
    marginBottom: 5,
    borderWidth: 3,
    borderColor: 'black',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default MealsDetailsScreen;
