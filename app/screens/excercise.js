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
  Pressable
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Header from '../components/Header';

const FirstRoute = () => (
  <View style={[styles.container, {width: '100%'}]}>
    <Image
      source={{
        uri: 'https://img.freepik.com/premium-vector/modern-positive-girl-training-home-fitness-clipart-about-healthy-lifestyle-cute-vector-hand-drawn-illustration-stay-home-sport-home-isolated-white-background_514409-164.jpg?w=2000',
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
        <FlatList
          data={[
            {key: 'Diet versus exercise'},
            {key: 'Exercise and weight loss'},
            {key: 'How much exercise should I do'},
            {key: 'Consistency'},
            {key: 'Hydration'},
            {key: 'Fitness Journal'},
            {key: 'Aerobic versus strength training'},
            {key: 'Cross training'},
          ]}
          renderItem={({item}) => {
            return (
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.container, {width: '100%'}]}>
    <Image
      source={{
        uri: 'https://media.istockphoto.com/vectors/women-different-sizes-ages-and-races-activities-set-of-women-doing-vector-id1281519215?b=1&k=20&m=1281519215&s=170667a&w=0&h=P8P9f-nRWoNXK2PRHSyIVKR4kt-l6Drq-AiMqT7ESS4=',
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
        <FlatList
          data={[
            {key: 'Diet versus exercise'},
            {key: 'Exercise and weight loss'},
            {key: 'How much exercise should I do'},
            {key: 'Consistency'},
            {key: 'Hydration'},
            {key: 'Fitness Journal'},
            {key: 'Aerobic versus strength training'},
            {key: 'Cross training'},
          ]}
          renderItem={({item}) => {
            return (
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  </View>
);
const ThirdRoute = () => (
  <View style={[styles.container, {width: '100%'}]}>
    <Image
      source={{
        uri: 'https://classroomclipart.com/images/gallery/Clipart/Fitness_and_Exercise/woman-running-on-treadmill-in-gym-workout-fitness-clipart.jpg',
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
      <View>
        <FlatList
          data={[
            {key: 'Diet versus exercise'},
            {key: 'Exercise and weight loss'},
            {key: 'How much exercise should I do'},
            {key: 'Consistency'},
            {key: 'Hydration'},
            {key: 'Fitness Journal'},
            {key: 'Aerobic versus strength training'},
            {key: 'Cross training'},
          ]}
          renderItem={({item}) => {
            return (
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  </View>
);
const ForthRoute = () => (
  <View style={[styles.container, {width: '100%'}]}>
    <Image
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7DWr0BcdXemJobMBf5uP3nSvv1c6aD1QpBw&usqp=CAU',
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
        <FlatList
          data={[
            {key: 'Diet versus exercise'},
            {key: 'Exercise and weight loss'},
            {key: 'How much exercise should I do'},
            {key: 'Consistency'},
            {key: 'Hydration'},
            {key: 'Fitness Journal'},
            {key: 'Aerobic versus strength training'},
            {key: 'Cross training'},
          ]}
          renderItem={({item}) => {
            return (
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  </View>
);

export default class ExcerciseScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'GENERAL ADVICE'},
      {key: 'second', title: 'AEROBIC'},
      {key: 'third', title: 'STRENGTH'},
      {key: 'forth', title: 'EQUIPMENT AND DEVICE'},
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
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:16}}>EXCERCISE</Text>
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
        /> 
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
