import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const DoItMySelfSection = () => {
  return (
    <ScrollView style={styles.scrollViewStyle}>
      <Text style={styles.pageTitle}>DO IT MYSELF PLAN</Text>
      <Text style={styles.subTitle}>
        THE PHILOSOPHY OF THE HOURGLASS PLAN IS SIMPLE: IT ENCOURAGES EATING
        SMALLER MEALS AND SNACKING MORE OFTEN THROUGHOUT THE DAY TO ELIMINATE
        HUNGER SPIKES.
      </Text>
      <Text style={styles.subTitle}>
        THE HOURGLASS PLAN TURNS SNACKING --THE LARGEST OBSTACLE TO LOSING
        WEIGHT --INTO AN ADVANTAGE
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.col1}>STEP 1</Text>
        <Text style={styles.col2}>
          USE THE{' '}
          <Text style={{color: 'red', textDecorationLine: 'underline'}}>
            HOURGLASS CALCULATOR
          </Text>{' '}
          TO DETERMINE YOUR{' '}
          <Text style={{color: 'blue'}}>DAILY CALORIES BURNED</Text>
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.col1}>STEP 2</Text>
        <Text style={styles.col2}>
          USE SUBSTRACTION TO CALCULATE YOUR{' '}
          <Text style={{color: 'green'}}>DAILY CALORIES TARGET</Text>
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.col1}>
          STEP 3
        </Text>
        <Text style={styles.col2}>
          DEVIDE YOUR{' '}
          <Text style={{color: 'green'}}>DAILY CALORIES TARGET</Text> INTO SIX
          MEALS IN ANY WAY YOU CHOOSE
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.col1}>
          STEP 4
        </Text>
        <Text style={styles.col2}>
          EAT YOUR FIRST MEAL OF THE DAY ACCORDING TO YOUR PLAN. CONTINUE EATING
          ACCORDING TO YOUR PLAN
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.col1}>
          STEP 5
        </Text>
        <View style={{flexDirection: 'row'}}></View>
        <Text style={styles.col2}>
          AFTER YOU FINISH EACH MEAL OF THE DAY, TURN THE HOURGLASS OVER.
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.col1}>
          STEP 6
        </Text>
        <Text style={styles.col2}>
          WHILE THE SAND IS POURING OUT,HYDRATE WELL AND AVOID CONSUMING
          ADDITONAL CALORIES
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.col1}>
          STEP 7
        </Text>
        <Text style={styles.col2}>
          CONTINUE EATING MEALS, FLIPPING HOURGLASS AND HYDRATING UNTIL YOU HAVE
          CONSUMED SIX MEALS
        </Text>
      </View>
    </ScrollView>
  );
};

function DoItMyselfScreen() {
  return (
    <View style={styles.doItMyselfView}>
      <DoItMySelfSection />
    </View>
  );
}

const styles = StyleSheet.create({
  doItMyselfView: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewStyle: {
    marginStart: 30,
    marginEnd: 30,
  },
  pageTitle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  subTitle: {
    textAlign: 'left',
    color: 'black',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
  },
  col1: {
    flex: 1,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
    textAlignVertical: 'center',
  },
  col2:{
    backgroundColor: '#d7d8d8',
    borderColor: 'black',
    borderWidth: 2,
    color: 'black',
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 20,
    flex: 4,
  },
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
    backgroundColor: '#445392',
    width: '60%',
    marginBottom: 5,
    borderColor: 'black',
    borderWidth: 3,
  },
  textback: {
    color: 'white',
  },
});

export default DoItMyselfScreen;
