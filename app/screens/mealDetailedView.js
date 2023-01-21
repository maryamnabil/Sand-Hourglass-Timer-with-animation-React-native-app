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

const MealsDetailedViewSection = ({navigation, Bcal, Ecal, title, uri}) => {
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
        HOURGLASS MEAL DATABASE
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center',
          }}>
          <Image
            source={{
              uri: 'https://qph.cf2.quoracdn.net/main-qimg-e4192f80406d2169c8c24694b70fbb17-lq',
            }}
            style={{
              width: 100,
              height: 100,
              marginTop: 20,
              marginHorizontal: 20,
            }}
          />
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            {title}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            {Bcal} - {Ecal} cals
          </Text>
        </View>
      </View>
    </View>
  );
};
function MealsDetailedViewScreen({navigation, route}) {
  const Ecal = route.params.Ecal;
  const Bcal = route.params.Bcal;
  const title = route.params.title;
  const uri = route.params.uri;
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: '30%'}}>
      <MealsDetailedViewSection
        navigation={navigation}
        Ecal={Ecal}
        Bcal={Bcal}
        title={title}
        uri={uri}
      />
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

export default MealsDetailedViewScreen;
