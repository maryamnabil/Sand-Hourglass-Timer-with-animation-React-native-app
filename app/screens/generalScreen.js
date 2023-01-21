import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions, Platform} from 'react-native';
import Header from '../components/Header';
import Timerc from '../components/timerc';

let general_count = false;
const isPortrait = () => {
  const dim = Dimensions.get('screen');
  general_count = true;
  return dim.height >= dim.width;
};

function GeneralScreen({showFlag}) {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      if (isPortrait()) {
        if (general_count == true) {
          setFlag(true);
          general_count = false;
        } else {
          setFlag(false);
        }
      } else {
        general_count = true;
      }
    });
  }, []); // 👈️ empty dependencies array

  return (
    <View style={{backgroundColor: 'white'}}>
      <Header />
      {showFlag && (
        <Text
          style={{
            fontSize: 20,
            alignSelf: 'center',
            textAlign: 'center',
            fontWeight: '600',
            marginBottom: 20,
          }}>
          THE SMART PLAN FOR WEIGHT MANAGMENT
        </Text>
      )}
      {showFlag && (
        <View style={{height: 400}}>
          <Timerc flag={flag} />
        </View>
      )}
      {/* <Screen/> */}
    </View>
  );
}

export default GeneralScreen;
