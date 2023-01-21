import * as React from 'react';
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  SafeAreaView,
  Text,
  Pressable,
  TextInput
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Header from '../components/Header';

const FirstRoute = () => (
  <View style={[styles.container, {width: '100%'}]}>
    <Image
      source={{
        uri: 'https://media.istockphoto.com/id/942707538/vector/hour-glass-sign-transparent-sandglass-icon-time-hourglass-sandclock-flat-design-vector-eps10.jpg?s=612x612&w=0&k=20&c=aHctWvyCX_Fde6tUMldLoj2xOCyiWHra-2deGvbXHi8=',
      }}
      style={{
        width: 200,
        height: 150,
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black',
      }}
    />
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingHorizontal: 20}}>
        <TextInput placeholder='Enter Your Question Here Add as much details and backgrounds as possible' multiline={true} numberOfLines={10} style={{borderWidth:2,borderColor:'black',borderRadius:5,marginVertical:10,padding:5 }}></TextInput>
      </View>
    </SafeAreaView>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.container, {width: '100%'}]}>
    <Image
      source={{
        uri: 'https://revcycleintelligence.com/images/site/article_headers/_normal/2017-12-12-patient-care.png',
      }}
      style={{
        width: 200,
        height: 150,
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black',
      }}
    />
    <SafeAreaView style={{flex: 1}}>
    <View style={{paddingHorizontal: 20}}>
        <TextInput placeholder='Enter Your Question Here Add as much details and backgrounds as possible' multiline={true} numberOfLines={10} style={{borderWidth:2,borderColor:'black',borderRadius:5,marginVertical:10,padding:5 }}></TextInput>
      </View>
    </SafeAreaView>
  </View>
);
const ThirdRoute = () => (
  <View style={[styles.container, {width: '100%'}]}>
    <Image
      source={{
        uri: 'https://elements-cover-images-0.imgix.net/ef822d70-cbc3-4f9c-8338-7b607b529599?auto=compress%2Cformat&fit=max&w=710&s=04418ec5d76a10fc56ec3cf89e67aa8b',
      }}
      style={{
        width: 200,
        height: 150,
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black',
      }}
    />
    <SafeAreaView style={{flex: 1}}>
    <View style={{paddingHorizontal: 20}}>
        <TextInput placeholder='Enter Your Question Here Add as much details and backgrounds as possible' multiline={true} numberOfLines={10} style={{borderWidth:2,borderColor:'black',borderRadius:5,marginVertical:10,padding:5 }}></TextInput>
      </View>
    </SafeAreaView>
  </View>
);
const ForthRoute = () => (
  <View style={[styles.container, {width: '100%'}]}>
    <Image
      source={{
        uri: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/76934/fitness-clipart-xl.png',
      }}
      style={{
        width: 200,
        height: 150,
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black',
      }}
    />
    <SafeAreaView style={{flex: 1}}>
    <View style={{paddingHorizontal: 20}}>
        <TextInput placeholder='Enter Your Question Here Add as much details and backgrounds as possible' multiline={true} numberOfLines={10} style={{borderWidth:2,borderColor:'black',borderRadius:5,marginVertical:10,padding:5 }}></TextInput>
      </View>
    </SafeAreaView>
  </View>
);

export default class QuestionsPremiumScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'HOURGLASS PLAN'},
      {key: 'second', title: 'HEALTH'},
      {key: 'third', title: 'FOOD'},
      {key: 'forth', title: 'FITNESS'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({index: i})}>
              <Animated.Text
                style={{opacity, fontWeight: 'bold', fontSize: 16}}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    forth: ForthRoute,
  });

  render() {
    return (
      <View style={{flex: 1,backgroundColor:'white'}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:16}}>DIETIAN QUESTIONS AND ANSWERS</Text>
        <View style={{flexDirection:'row',width:'100%',paddingHorizontal:20,paddingVertical:20}}>
          <Text style={{fontSize:16,fontWeight:'bold',flex:1,paddingHorizontal:10,alignSelf:'center'}}>From</Text>
          <TextInput style={{borderRadius:5,borderWidth:2,borderColor:'black',flex:4,paddingHorizontal:10}}></TextInput>
        </View>
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
        />
            <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Customized')}>
          <Text style={styles.text}>Submit</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  touchable: {
    backgroundColor: 'white',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    paddingVertical:5
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
    backgroundColor: '#445392',
    width: '60%',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
  },
});
