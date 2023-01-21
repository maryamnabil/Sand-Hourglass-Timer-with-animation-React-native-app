import React ,{ useState }from 'react';
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
  TextInput,
} from 'react-native';
import {Form, FormItem} from 'react-native-form-component';
import CheckBox from '@react-native-community/checkbox';
import Header from '../components/Header';

const CalculatorSection = ({navigation}) => {
  const [height, setHeight] = useState('0');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('0');
  const [weight, setWeight] = useState('0');
  const [wl, setWL] = useState('5');
  const [min, setMin] = useState('0');
  const [el, setEL] = useState('5');
  
  function calculate(){
    let BMR;
    let x;
    if(sex=="M" ||sex=="m"|| sex=='male'){
      BMR= (10*weight)+(6.25*height)-(5*age)+5

    }
    else {
      BMR= (10*weight)+(6.25*height)-(5*age)-161
    }


    let TC=(wl*600)+(min*(parseInt(el)+4))
    if(TC>=6000)
    x=1.9
    else
    x=1.2+0.7*((TC-600)/5400)


    let tidee=x*BMR;
    tidee=Math.round(tidee * 1000) / 1000

    navigation.navigate('CalculatorResult',{
      TIDEE:tidee,
      SEX:sex
    })
  }
  return (
    <ScrollView style={{padding: 30, paddingTop: 10}}>
      <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
        CALCULATOR
      </Text>
      <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold',marginBottom:20}}>
        Calculate Your <Text style={{color:'blue'}}>Daily Calories Burned</Text>
      </Text>
      <View
        // buttonText="CALCULATE MY TIDE"
        // buttonStyle={{backgroundColor: 'orange'}}
        // onButtonPress={() => navigation.navigate('CalculatorResult')}
        >
        <View
          style={[
            styles.checkboxContainer,
            {backgroundColor: '#f2f2f2', alignItems: 'center'},
          ]}>
          <Text>Sex</Text>
          <TextInput value={sex}  style={styles.input} onChangeText={setSex}/>
        </View>
        <View
          style={[
            styles.checkboxContainer,
            {backgroundColor: '#f2f2f2', alignItems: 'center'},
          ]}>
          <Text>Age</Text>
          <TextInput value={age} onChangeText={setAge} style={styles.input}/>
        </View>
        <View
          style={[
            styles.checkboxContainer,
            {backgroundColor: '#f2f2f2', alignItems: 'center'},
          ]}> 
          <Text>Weight</Text>
          <TextInput value={weight} onChangeText={setWeight} style={styles.input}/>
          <Text style={{marginStart:10}}>kg</Text>
        </View>
        <View
          style={[
            styles.checkboxContainer,
            {backgroundColor: '#f2f2f2', alignItems: 'center'},
          ]}>
          <Text>Height</Text>
          <TextInput style={styles.input} value={height} onChangeText={setHeight}/>
          <Text style={{marginStart:10}}>cm</Text>
        </View>
        <View
          style={[
            styles.checkboxContainer,
            {backgroundColor: '#f2f2f2', alignItems: 'center'},
          ]}>
            <View style={{flexDirection:'column'}}>
              <View style={{flexDirection:'row'}}>
              <Text>Work Activity level</Text>
          <TextInput value={wl} onChangeText={setWL} style={styles.input}/>
              </View>
              <Text>1  2  3  4  5  6  7  8  9  10</Text>
              <Text>sedentary <Text>            Vigorous</Text></Text>
            </View>
        </View>
        <View
          style={[
            styles.checkboxContainer,
            {backgroundColor: '#f2f2f2', alignItems: 'center'},
          ]}>
          <Text>Minutes per Intentional excercise per week</Text>
          <TextInput value={min} onChangeText={setMin} style={styles.input}/>
        </View>
        <View
          style={[
            styles.checkboxContainer,
            {backgroundColor: '#f2f2f2', alignItems: 'center'},
          ]}>
            <View style={{flexDirection:'column'}}>
              <View style={{flexDirection:'row'}}>
              <Text>Excercise Intenisty level</Text>
              <TextInput value={el} onChangeText={setEL} style={styles.input}/>
              </View>
              <Text>1  2  3  4  5  6  7  8  9  10</Text>
              <Text>Mellow <Text>            Intense</Text></Text>
            </View>
        </View>
        <Pressable
          style={styles.backbtn}
          onPress={calculate}>
          <Text style={styles.textback}>Proceed to step 2</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

function CalculatorScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white',}}>
      <CalculatorSection navigation={navigation} />
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '60%',
    marginBottom: 5,
    borderColor: 'black',
    borderWidth: 3,
    marginBottom:20
  },
  textback: {
    color: 'black',
  },
  checkboxContainer: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 4,
    padding: 10,
    width:'100%',
    marginBottom:10,
    borderRadius: 4,
    justifyContent: 'center'
  },
  input: {
    borderColor: 'black',
    backgroundColor: '#c2c9e6',
    borderWidth: 1,
    padding: 3,
    marginStart: 10,
    textAlign:'center'
  
  },
  label: {
    margin: 8,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default CalculatorScreen;
