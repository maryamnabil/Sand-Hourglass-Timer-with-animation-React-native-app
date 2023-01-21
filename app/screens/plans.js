import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

const PlansSection = ({navigation}) => {
  return (
    <View>
      <Pressable
        style={[styles.button, styles.doItMySelfButton]}
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
function PlansScreen({navigation}) {
  return (
    <View style={styles.planView}>
      <PlansSection navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  planView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 20,
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

  doItMySelfButton: {
    backgroundColor: '#595959',
  },
});

export default PlansScreen;
