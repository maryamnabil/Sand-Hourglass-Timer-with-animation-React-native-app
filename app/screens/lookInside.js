import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


function LookInsideScreen({navigation}) {
  return (
    <View style={styles.lookinsideView}>
      <View
        style={[
          styles.container,
          {
            flexDirection: 'row',
          },
        ]}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('Plans')}>
          <Text style={[styles.innerTextContainer]}>Plans</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('Calculator')}>
          <Text style={[styles.innerTextContainer]}>Calculator</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.container,
          {
            flexDirection: 'row',
          },
        ]}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('Journal')}>
          <Text style={[styles.innerTextContainer]}>Journal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('Meals')}>
          <Text style={[styles.innerTextContainer]}>Meal Database</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.container,
          {
            flexDirection: 'row',
          },
        ]}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('QuestionsStandard')}>
          <Text style={[styles.innerTextContainer]}>Dietian Q&A Database</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('Excercise')}>
          <Text style={[styles.innerTextContainer]}>
            Ask Dietians Personal Questions
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Pressable
          style={styles.backbtn}
          onPress={() => navigation.popToTop()}>
          <Text style={styles.textback}>Back</Text>
        </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  lookinsideView: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 30,
  },
  image: {
    width: '100%',
    height: '30%',
  },
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
  },

  innerTextContainer: {
    color: 'white',
    fontSize: 22,
    paddingStart: 20,
    paddingTop: 20,
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
    backgroundColor: '#cccccc',
    width: '60%',
    marginBottom: 5,
    borderColor: 'black',
    borderWidth: 3,
  },
  textback: {
    color: 'black',
  },
  touchable: {
    flex: 1,
    backgroundColor: '#283142',
    marginRight: 10,
    borderRadius: 10,
  },
});

export default LookInsideScreen;
