import React from 'react';
import {Text, useColorScheme, View, StyleSheet, Image} from 'react-native';

function Header() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
        <View style={styles.headerView}>
          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Text style={[styles.Headerhourglass]}>
              {' '}
              <Text style={{backgroundColor: 'orange', padding: 0, margin: 0}}>
                {' '}
                HourGlass{' '}
              </Text>
              <Text style={[styles.headerPlan, {padding: 0, margin: 0}]}>
                {' '}
                Plan
              </Text>{' '}
            </Text>
          </View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://media.istockphoto.com/id/942707538/vector/hour-glass-sign-transparent-sandglass-icon-time-hourglass-sandclock-flat-design-vector-eps10.jpg?s=1024x1024&w=is&k=20&c=RaVfvuxZP3or18k3J0BouF5y0OVuZF-kXizaUn0mVws=',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingStart: 0,
    marginStart:0
  },
  Headerhourglass: {
    color: 'white',
    backgroundColor: 'black',
    fontSize: 24,
    padding: 5,
    paddingStart: 0,
  },
  headerPlan: {
    color: 'white',
    fontSize: 24,
  },

});

export default Header;
