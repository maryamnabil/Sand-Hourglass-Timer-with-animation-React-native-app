import React from 'react';
import {StyleSheet, Text, View, Pressable, TextInput, TouchableOpacity, ScrollView} from 'react-native';

import Header from '../components/Header';
import Timerc from '../components/timerc';

const JournalSection = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#a9abb2',
          marginHorizontal: 10,
          borderColor: 'black',
          borderWidth: 2,
        }}>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
          }}>
          Meal
        </Text>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
          }}>
          Plan
        </Text>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
          }}>
          Count
        </Text>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
          }}>
          Net Carb Count
        </Text>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
          }}>
          Food
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            alignSelf: 'center',
          }}>
          BREAKFAST
        </Text>
        <TouchableOpacity        
        style={{
          alignContent:'center',
          alignItems:'center',
          alignSelf:'center',
          flex: 1,
        }}   
        onPress={() => navigation.navigate('MealsDetails',{
            Bcal: "200", Ecal: "250"
          })}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 14,
            backgroundColor: 'orange',
            textAlign: 'center',
            alignSelf: 'center',
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 10,
            padding:10
          }}>
          200-250
        </Text>
        </TouchableOpacity>
        <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: '#6b81bd',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
                  <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: '#6b81bd',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
        <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            alignSelf: 'center',
          }}>
          LATE MORNING
        </Text>
        <TouchableOpacity        
        style={{
          alignContent:'center',
          alignItems:'center',
          alignSelf:'center',
          flex: 1,
        }}   
        onPress={() => navigation.navigate('MealsDetails',{
            Bcal: "150", Ecal: "200"
          })}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 14,
            backgroundColor: 'orange',
            textAlign: 'center',
            alignSelf: 'center',
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 10,
            padding:10
          }}>
          150-200
        </Text>
        </TouchableOpacity>
        <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: '#6b81bd',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
                  <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: '#6b81bd',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
        <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            alignSelf: 'center',
          }}>
          LUNCH
        </Text>
        <TouchableOpacity        
        style={{
          alignContent:'center',
          alignItems:'center',
          alignSelf:'center',
          flex: 1,
        }}   
        onPress={() => navigation.navigate('MealsDetails',{
            Bcal: "150", Ecal: "200"
          })}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 14,
            backgroundColor: 'orange',
            textAlign: 'center',
            alignSelf: 'center',
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 10,
            padding:10
          }}>
          250-300
        </Text>
        </TouchableOpacity>
        <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: '#6b81bd',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
                  <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: '#6b81bd',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
        <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            alignSelf: 'center',
          }}>
          AFTERNOON
        </Text>
        <TouchableOpacity        
        style={{
          alignContent:'center',
          alignItems:'center',
          alignSelf:'center',
          flex: 1,
        }}   
        onPress={() => navigation.navigate('MealsDetails',{
            Bcal: "150", Ecal: "200"
          })}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 14,
            backgroundColor: 'orange',
            textAlign: 'center',
            alignSelf: 'center',
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 10,
            padding:10
          }}>
          150-200
        </Text>
        </TouchableOpacity>
        <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: '#6b81bd',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
                  <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: '#6b81bd',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
        <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            alignSelf: 'center',
          }}>
          DINNER
        </Text>
        <TouchableOpacity        
        style={{
          alignContent:'center',
          alignItems:'center',
          alignSelf:'center',
          flex: 1,
        }}   
        onPress={() => navigation.navigate('MealsDetails',{
            Bcal: "150", Ecal: "200"
          })}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 14,
            backgroundColor: 'orange',
            textAlign: 'center',
            alignSelf: 'center',
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 10,
            padding:10
          }}>
          150-200
        </Text>
        </TouchableOpacity>
        <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: '#6b81bd',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
                  <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: '#6b81bd',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
        <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            alignSelf: 'center',
          }}>
          DESSERT
        </Text>
        <TouchableOpacity        
        style={{
          alignContent:'center',
          alignItems:'center',
          alignSelf:'center',
          flex: 1,
        }}   
        onPress={() => navigation.navigate('MealsDetails',{
            Bcal: "150", Ecal: "200"
          })}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 14,
            backgroundColor: 'orange',
            textAlign: 'center',
            alignSelf: 'center',
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 10,
            padding:10
          }}>
          150-200
        </Text>
        </TouchableOpacity>
        <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: '#6b81bd',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
                  <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: '#6b81bd',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
        <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            alignSelf: 'center',
          }}>
          TOTAL
        </Text>
        <TouchableOpacity        
        style={{
          alignContent:'center',
          alignItems:'center',
          alignSelf:'center',
          flex: 1,
        }}   
        onPress={() => navigation.navigate('MealsDetails',{
            Bcal: "150", Ecal: "200"
          })}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 14,
            backgroundColor: '#dfa5ce',
            textAlign: 'center',
            alignSelf: 'center',
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 10,
            padding:10
          }}>
          1250-1550
        </Text>
        </TouchableOpacity>
        <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: '#dfa5ce',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
                  <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: '#dfa5ce',
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 5,
            alignSelf: 'center',
          }}></TextInput>
        <TextInput
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
            backgroundColor: 'white',
            marginHorizontal: 5,
            alignSelf: 'center',
            backfaceVisibility:'hidden'
          }} editable={false} selectTextOnFocus={false}></TextInput>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderWidth: 3,
          marginHorizontal: 10,
        }}
      />
      <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:10}}>
        <Text style={{flex:1,alignSelf:'center',textAlign:'right'}}>WEIGHT</Text>
        <TextInput  style={{
            flex: 2,
            fontWeight: 'bold',
            fontSize: 14,
            backgroundColor: '#6b81bd',
            borderColor: 'black',
            borderWidth: 2,
            alignSelf:'center',
            textAlign:'center',
            alignContent:'center',
            justifyContent:'center',
            alignItems:'center',
            marginStart:10
          }}></TextInput>
      </View>
      <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:10}}>
        <Text style={{flex:1,alignSelf:'center',textAlign:'right'}}>MINUTES OF EXCERCISE</Text>
        <TextInput  style={{
            flex: 2,
            fontWeight: 'bold',
            fontSize: 14,
            backgroundColor: '#6b81bd',
            borderColor: 'black',
            borderWidth: 2,
            alignSelf:'center',
            textAlign:'center',
            alignContent:'center',
            justifyContent:'center',
            alignItems:'center',
            marginStart:10
          }}></TextInput>
      </View>
    </ScrollView>
  );
};
function JournalScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <Timerc/> */}
      <JournalSection navigation={navigation} />
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
    backgroundColor: '#445392',
    width: '60%',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default JournalScreen;
