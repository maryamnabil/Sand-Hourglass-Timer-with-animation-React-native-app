import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuestionsPremiumScreen from '../screens/questionsPremium';
import QuestionsStandardScreen from '../screens/questionsStandard';
import HomeScreen from '../screens/home';
import GetStartedScreen from '../screens/getStarted';
import HowHourGlassWorksScreen from '../screens/howHourglassWorks';
import DoItMyselfScreen from '../screens/doItMyslef';
import LookInsideScreen from '../screens/lookInside';
import PlansScreen from '../screens/plans';
import CustomizedPlanScreen from '../screens/customizedPlan';
import CalculatorScreen from '../screens/calculator';
import CalculatorRsultsScreen from '../screens/calculatorResult';
import CustomizedFitnessPlanScreen from '../screens/customizedFitnessPlan';
import MealsScreen from '../screens/meals';
import MealsDetailsScreen from '../screens/mealDetails';
import MealsDetailedViewScreen from '../screens/mealDetailedView';
import JournalScreen from '../screens/journal';
import CustomizedPlanCalculatorScreen from '../screens/customizedPlanCalculator';
import ExcerciseScreen from '../screens/excercise';
import GeneralScreen from '../screens/generalScreen';
import {View} from 'react-native';

const CustomNavigations = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        headerBackVisible: false,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="HOURGLASS PLAN"
        component={HomeScreen}
        options={{headerTitle: () => <GeneralScreen showFlag={true} />}}
      />
      <Stack.Screen
        options={{headerTitle: () => <GeneralScreen showFlag={true} />}}
        name="GetStarted"
        component={GetStartedScreen}
      />
      <Stack.Screen
        options={{headerTitle: () => <GeneralScreen showFlag={true} />}}
        name="HowHourGlassWorks"
        component={HowHourGlassWorksScreen}
      />
      <Stack.Screen
        options={{headerTitle: () => <GeneralScreen showFlag={false} />}}
        name="QuestionsPremium"
        component={QuestionsPremiumScreen}
      />
      <Stack.Screen
        options={{headerTitle: () => <GeneralScreen showFlag={false} />}}
        name="LookInside"
        component={LookInsideScreen}
      />
      <Stack.Screen
        options={{headerTitle: () => <GeneralScreen showFlag={true} />}}
        name="Plans"
        component={PlansScreen}
      />
      <Stack.Screen
        options={{headerTitle: () => <GeneralScreen showFlag={false} />}}
        name="DoItMyself"
        component={DoItMyselfScreen}
      />
      <Stack.Screen
        options={{headerTitle: () => <GeneralScreen showFlag={false} />}}
        name="Customized"
        component={CustomizedPlanScreen}
      />
      <Stack.Screen
        options={{headerTitle: () => <GeneralScreen showFlag={false} />}}
        name="Calculator"
        component={CalculatorScreen}
      />
      <Stack.Screen
        options={({route}) => ({
          headerTitle: () => <GeneralScreen showFlag={false} />,
          TIDEE: route.params.TIDEE,
          SEX: route.params.SEX,
        })}
        name="CalculatorResult"
        component={CalculatorRsultsScreen}
      />
      <Stack.Screen
        options={({route}) => ({
          headerTitle: () => <GeneralScreen showFlag={false} />,
          minMdc: route.params.minMdc,
          maxMdc: route.params.maxMdc,
          firstlow: route.params.firstlow,
          firsthigh: route.params.firsthigh,
          lateMorninglow: route.params.lateMorninglow,
          lateMorninghigh: route.params.lateMorninghigh,
          secondlow: route.params.secondlow,
          secondhigh: route.params.secondhigh,
          afternoonLow: route.params.afternoonLow,
          afternoonHigh: route.params.afternoonHigh,
          thirdlow: route.params.thirdlow,
          thirdhigh: route.params.thirdhigh,
          dessertlow: route.params.dessertlow,
          desserthigh: route.params.desserthigh,
          firstRankedMeal: route.params.firstRankedMeal,
          secondRankedMeal: route.params.secondRankedMeal,
          thirdRankedMeal: route.params.thirdRankedMeal,
        })}
        name="CustomizedFitnessPlan"
        component={CustomizedFitnessPlanScreen}
      />
      <Stack.Screen
        options={{          headerTitle: () => <GeneralScreen showFlag={false} />,
      }}
        name="Meals"
        component={MealsScreen}
      />
      <Stack.Screen
        options={({route}) => ({
          headerTitle: () => <GeneralScreen showFlag={false} />,
          Bcal: route.params.Bcal,
          Ecal: route.params.Ecal,
        })}
        name="MealsDetails"
        component={MealsDetailsScreen}
      />
      <Stack.Screen
        options={({route}) => ({
          headerTitle: () => <GeneralScreen showFlag={false} />,
          Bcal: route.params.Bcal,
          Ecal: route.params.Ecal,
          title: route.params.title,
          uri: route.params.uri,
        })}
        name="MealsDetailedView"
        component={MealsDetailedViewScreen}
      />
      <Stack.Screen
        options={{headerTitle: () => <GeneralScreen showFlag={false} />}}
        name="Journal"
        component={JournalScreen}
      />
      <Stack.Screen
        options={({route}) => ({
          headerTitle: () => <GeneralScreen showFlag={false} />,
          TIDEE: route.params.TIDEE,
          SEX: route.params.SEX,
        })}
        name="CustomizedPlanCalculator"
        component={CustomizedPlanCalculatorScreen}
      />
      <Stack.Screen
        options={{headerTitle: () => <GeneralScreen showFlag={false} />}}
        name="QuestionsStandard"
        component={QuestionsStandardScreen}
      />
      <Stack.Screen
        options={{headerTitle: () => <GeneralScreen showFlag={false} />}}
        name="Excercise"
        component={ExcerciseScreen}
      />
    </Stack.Navigator>
  );
};

export {CustomNavigations};
