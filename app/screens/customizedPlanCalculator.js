import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Modal
} from 'react-native';
import Timerc from '../components/timerc';

const CustomizedClacSection = ({navigation, TIDEE, SEX,setVisbile}) => {
  const [noIncreaseFlag, changenoIncreaseFlag] = useState(false);
  const [Increase30Flag, changeIncrease30Flag] = useState(false);
  const [Increase60Flag, changeIncrease60Flag] = useState(false);
  const [Increaseg60Flag, changeIncreaseg60Flag] = useState(false);

  const [LowFlag, changeLowFlag] = useState(false);
  const [MediumFlag, changeMediumFlag] = useState(false);
  const [HighFlag, changeHighFlag] = useState(false);

  const [maintainFlag, changemaintainFlag] = useState(false);
  const [Lose1Flag, changeLose1Flag] = useState(false);
  const [Lose2Flag, changeLose2Flag] = useState(false);

  const [bRanked, changeBRanked] = useState('');
  const [lRanked, changeLRanked] = useState('');
  const [dRanked, changeDRanked] = useState('');

  function selectIncrease(flag) {
    if (flag == 'no') {
      changenoIncreaseFlag(!noIncreaseFlag);
      changeIncrease30Flag(false);
      changeIncrease60Flag(false);
      changeIncreaseg60Flag(false);
    } else if (flag == '30') {
      changenoIncreaseFlag(false);
      changeIncrease30Flag(!Increase30Flag);
      changeIncrease60Flag(false);
      changeIncreaseg60Flag(false);
    } else if (flag == '60') {
      changenoIncreaseFlag(false);
      changeIncrease30Flag(false);
      changeIncrease60Flag(!Increase60Flag);
      changeIncreaseg60Flag(false);
    } else {
      changenoIncreaseFlag(false);
      changeIncrease30Flag(false);
      changeIncrease60Flag(false);
      changeIncreaseg60Flag(!Increaseg60Flag);
    }
  }
  function selectHML(flag) {
    if (flag == 'L') {
      changeLowFlag(!LowFlag);
      changeHighFlag(false);
      changeMediumFlag(false);
    } else if (flag == 'H') {
      changeLowFlag(false);
      changeHighFlag(!HighFlag);
      changeMediumFlag(false);
    } else {
      changeLowFlag(false);
      changeHighFlag(false);
      changeMediumFlag(!MediumFlag);
    }
  }

  function selectML(flag) {
    if (flag == 'M') {
      changemaintainFlag(!maintainFlag);
      changeLose1Flag(false);
      changeLose2Flag(false);
    } else if (flag == 'L1') {
      changemaintainFlag(false);
      changeLose1Flag(!Lose1Flag);
      changeLose2Flag(false);
    } else {
      changemaintainFlag(false);
      changeLose1Flag(false);
      changeLose2Flag(!Lose2Flag);
    }
  }

  function calculate() {
    let mdc;
    if (
      maintainFlag &&
      SEX == 'F' &&
      (noIncreaseFlag ||
        (Increase30Flag && MediumFlag) ||
        (Increase30Flag && LowFlag))
    ) {
      alert(
        'A woman should consume no less than 1,200 calories per day. This is according to the Dietary Guidlelines for Americans and Harvard Health Publishing. These numbers are based on formulas that calculate the Estimated Energy Requirment (EER) or the amount of energy that the average body needs  to function. This the Hourglass plan sets a floor on the calories a woman consumes at 1,200 calories per day',
      );
      mdc = TIDEE;
    } else if (maintainFlag && SEX == 'M') {
      alert(
        'A man should consume no less than 1,500 calories per day. This is according to the Dietary Guidlelines for Americans and Harvard Health Publishing. These numbers are based on formulas that calculate the Estimated Energy Requirment (EER) or the amount of energy that the average body needs  to function. This the Hourglass plan sets a floor on the calories a woman consumes at 1,500 calories per day',
      );
      mdc = TIDEE;
    } else if (maintainFlag && SEX == 'F' && Increase60Flag && MediumFlag) {
      mdc = TIDEE + 10;
    } else if (maintainFlag && SEX == 'F' && Increaseg60Flag && MediumFlag) {
      mdc = TIDEE + 15;
    } else if (maintainFlag && SEX == 'F' && noIncreaseFlag && HighFlag) {
      mdc = TIDEE;
    } else if (maintainFlag && SEX == 'F' && Increase30Flag && HighFlag) {
      mdc = TIDEE;
    } else if (maintainFlag && SEX == 'F' && Increase60Flag && HighFlag) {
      mdc = TIDEE + 10;
    } else if (maintainFlag && SEX == 'F' && Increaseg60Flag && HighFlag) {
      mdc = TIDEE + 15;
    } else if (
      Lose1Flag &&
      ((LowFlag && noIncreaseFlag) ||
        (LowFlag && Increase30Flag) ||
        (MediumFlag && noIncreaseFlag) ||
        (MediumFlag && Increase30Flag))
    ) {
      mdc = TIDEE - 550;
    } else if (
      Lose1Flag &&
      ((LowFlag && Increase60Flag) || (MediumFlag && Increase60Flag))
    ) {
      mdc = TIDEE - 540;
    } else if (
      Lose1Flag &&
      ((LowFlag && Increaseg60Flag) || (MediumFlag && Increaseg60Flag))
    ) {
      mdc = TIDEE - 535;
    } else if (
      Lose1Flag &&
      ((HighFlag && noIncreaseFlag) || (HighFlag && Increase30Flag))
    ) {
      mdc = TIDEE - 600;
    } else if (Lose1Flag && HighFlag && Increase60Flag) {
      mdc = TIDEE - 590;
      if (mdc > 2000)
        alert(
          'The Hourglass Plan recommends that for most individuals trying to lose weight , they should consume no more than 2000 calories per day',
        );
    } else if (Lose1Flag && HighFlag && Increaseg60Flag) {
      mdc = TIDEE - 585;
    } else if (
      (Lose2Flag && LowFlag && noIncreaseFlag) ||
      (Lose2Flag && LowFlag && Increase30Flag) ||
      (Lose2Flag && MediumFlag && noIncreaseFlag) ||
      (Lose2Flag && MediumFlag && Increase30Flag)
    ) {
      mdc = TIDEE - 1050;
    } else if (
      (Lose2Flag && LowFlag && Increase60Flag) ||
      (Lose2Flag && MediumFlag && Increase60Flag)
    ) {
      mdc = TIDEE - 1040;
    } else if (
      (Lose2Flag && LowFlag && Increaseg60Flag) ||
      (Lose2Flag && MediumFlag && Increaseg60Flag)
    ) {
      mdc = TIDEE - 1035;
    } else if (
      (Lose2Flag && HighFlag && noIncreaseFlag) ||
      (Lose2Flag && HighFlag && Increase30Flag)
    ) {
      mdc = TIDEE - 1100;
    } else if (Lose2Flag && HighFlag && Increase60Flag) {
      mdc = TIDEE - 1090;
    } else if (Lose2Flag && HighFlag && Increaseg60Flag) {
      mdc = TIDEE - 1085;
    }

    checkMDC(mdc, navigation);
  }

  function checkMDC(mdc, navigation) {
    // alert(mdc)
    let navigateFlag = true;
    let minMdc = '';
    let maxMdc = '';
    let firstlow = '';
    let firsthigh = '';
    let lateMorninglow = '';
    let lateMorninghigh = '';
    let secondlow = '';
    let secondhigh = '';
    let afternoonLow = '';
    let afternoonHigh = '';
    let thirdlow = '';
    let thirdhigh = '';
    let dessertlow = '';
    let desserthigh = '';
    let firstRankedMeal='';
    let secondRankedMeal='';
    let thirdRankedMeal='';
    if (mdc < 1200) {
      navigateFlag = false;
      alert("invalid")
    } else if (1250 > mdc && mdc >= 1200) {
      minMdc = 1050;
      maxMdc = 1350;
      firstlow = 300;
      firsthigh = 350;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 200;
      secondhigh = 250;
      afternoonLow = 100;
      afternoonHigh = 150;
      thirdlow = 150;
      thirdhigh = 200;
      dessertlow = 150;
      desserthigh = 200;
    } else if (1300 > mdc && mdc >= 1250) {
      minMdc = 1100;
      maxMdc = 1400;
      firstlow = 300;
      firsthigh = 350;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 250;
      secondhigh = 300;
      afternoonLow = 100;
      afternoonHigh = 150;
      thirdlow = 150;
      thirdhigh = 200;
      dessertlow = 150;
      desserthigh = 200;
    } else if (1350 > mdc && mdc >= 1300) {
      minMdc = 1150;
      maxMdc = 1450;
      firstlow = 300;
      firsthigh = 350;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 300;
      secondhigh = 350;
      afternoonLow = 100;
      afternoonHigh = 150;
      thirdlow = 150;
      thirdhigh = 200;
      dessertlow = 150;
      desserthigh = 200;
    } else if (1400 > mdc && mdc >= 1350) {
      minMdc = 1200;
      maxMdc = 1500;
      firstlow = 300;
      firsthigh = 350;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 300;
      secondhigh = 350;
      afternoonLow = 100;
      afternoonHigh = 150;
      thirdlow = 200;
      thirdhigh = 250;
      dessertlow = 150;
      desserthigh = 200;
    } else if (1450 > mdc && mdc >= 1400) {
      minMdc = 1250;
      maxMdc = 1550;
      firstlow = 300;
      firsthigh = 350;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 300;
      secondhigh = 350;
      afternoonLow = 100;
      afternoonHigh = 150;
      thirdlow = 250;
      thirdhigh = 300;
      dessertlow = 150;
      desserthigh = 200;
    } else if (1500 > mdc && mdc >= 1450) {
      minMdc = 1300;
      maxMdc = 1600;
      firstlow = 350;
      firsthigh = 400;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 300;
      secondhigh = 350;
      afternoonLow = 100;
      afternoonHigh = 150;
      thirdlow = 250;
      thirdhigh = 300;
      dessertlow = 150;
      desserthigh = 200;
    } else if (1550 > mdc && mdc >= 1500) {
      minMdc = 1350;
      maxMdc = 1650;
      firstlow = 350;
      firsthigh = 400;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 300;
      secondhigh = 350;
      afternoonLow = 100;
      afternoonHigh = 150;
      thirdlow = 300;
      thirdhigh = 350;
      dessertlow = 150;
      desserthigh = 200;
    } else if (1600 > mdc && mdc >= 1550) {
      minMdc = 1400;
      maxMdc = 1650;
      firstlow = 350;
      firsthigh = 400;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 350;
      secondhigh = 400;
      afternoonLow = 100;
      afternoonHigh = 150;
      thirdlow = 300;
      thirdhigh = 350;
      dessertlow = 150;
      desserthigh = 200;
    } else if (1650 > mdc && mdc >= 1600) {
      minMdc = 1500;
      maxMdc = 1750;
      firstlow = 400;
      firsthigh = 450;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 350;
      secondhigh = 400;
      afternoonLow = 150;
      afternoonHigh = 150;
      thirdlow = 300;
      thirdhigh = 350;
      dessertlow = 150;
      desserthigh = 200;
    } else if (1700 > mdc && mdc >= 1650) {
      minMdc = 1500;
      maxMdc = 1800;
      firstlow = 400;
      firsthigh = 450;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 350;
      secondhigh = 400;
      afternoonLow = 150;
      afternoonHigh = 200;
      thirdlow = 300;
      thirdhigh = 350;
      dessertlow = 150;
      desserthigh = 200;
    } else if (1750 > mdc && mdc >= 1700) {
      minMdc = 1550;
      maxMdc = 1850;
      firstlow = 400;
      firsthigh = 450;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 350;
      secondhigh = 400;
      afternoonLow = 150;
      afternoonHigh = 200;
      thirdlow = 350;
      thirdhigh = 400;
      dessertlow = 150;
      desserthigh = 200;
    } else if (1800 > mdc && mdc >= 1750) {
      minMdc = 1600;
      maxMdc = 1900;
      firstlow = 400;
      firsthigh = 450;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 400;
      secondhigh = 450;
      afternoonLow = 150;
      afternoonHigh = 200;
      thirdlow = 350;
      thirdhigh = 400;
      dessertlow = 150;
      desserthigh = 200;
    } else if (1850 > mdc && mdc >= 1800) {
      minMdc = 1650;
      maxMdc = 1950;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 400;
      secondhigh = 450;
      afternoonLow = 150;
      afternoonHigh = 200;
      thirdlow = 350;
      thirdhigh = 400;
      dessertlow = 150;
      desserthigh = 200;
    } else if (1900 > mdc && mdc >= 1850) {
      minMdc = 1700;
      maxMdc = 2000;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 400;
      secondhigh = 450;
      afternoonLow = 150;
      afternoonHigh = 200;
      thirdlow = 400;
      thirdhigh = 450;
      dessertlow = 150;
      desserthigh = 200;
    } else if (1950 > mdc && mdc >= 1900) {
      minMdc = 1750;
      maxMdc = 2050;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 150;
      afternoonHigh = 200;
      thirdlow = 400;
      thirdhigh = 450;
      dessertlow = 150;
      desserthigh = 200;
    } else if (2000 > mdc && mdc >= 1950) {
      minMdc = 1800;
      maxMdc = 2100;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 150;
      lateMorninghigh = 200;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 150;
      afternoonHigh = 200;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 150;
      desserthigh = 200;
    } else if (2050 > mdc && mdc >= 2000) {
      minMdc = 1850;
      maxMdc = 2150;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 200;
      lateMorninghigh = 250;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 150;
      afternoonHigh = 200;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 150;
      desserthigh = 200;
    } else if (2100 > mdc && mdc >= 2050) {
      minMdc = 1900;
      maxMdc = 2200;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 200;
      lateMorninghigh = 250;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 200;
      afternoonHigh = 250;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 150;
      desserthigh = 200;
    } else if (2150 > mdc && mdc >= 2100) {
      minMdc = 1950;
      maxMdc = 2250;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 200;
      lateMorninghigh = 250;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 200;
      afternoonHigh = 250;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 200;
      desserthigh = 250;
    } else if (2200 > mdc && mdc >= 2150) {
      minMdc = 2000;
      maxMdc = 2300;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 250;
      lateMorninghigh = 300;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 200;
      afternoonHigh = 250;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 200;
      desserthigh = 250;
    } else if (2250 > mdc && mdc >= 2200) {
      minMdc = 2050;
      maxMdc = 2350;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 250;
      lateMorninghigh = 300;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 250;
      afternoonHigh = 300;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 200;
      desserthigh = 250;
    } else if (2300 > mdc && mdc >= 2250) {
      minMdc = 2100;
      maxMdc = 2400;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 250;
      lateMorninghigh = 300;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 250;
      afternoonHigh = 300;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 250;
      desserthigh = 300;
    } else if (2350 > mdc && mdc >= 2300) {
      minMdc = 2150;
      maxMdc = 2450;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 300;
      lateMorninghigh = 350;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 250;
      afternoonHigh = 300;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 250;
      desserthigh = 300;
    } else if (2400 > mdc && mdc >= 2350) {
      minMdc = 2200;
      maxMdc = 2500;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 300;
      lateMorninghigh = 350;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 300;
      afternoonHigh = 350;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 250;
      desserthigh = 300;
    } else if (2450 > mdc && mdc >= 2400) {
      minMdc = 2250;
      maxMdc = 2550;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 350;
      lateMorninghigh = 400;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 300;
      afternoonHigh = 350;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 250;
      desserthigh = 300;
    } else if (2500 > mdc && mdc >= 2450) {
      minMdc = 2300;
      maxMdc = 2600;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 350;
      lateMorninghigh = 400;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 350;
      afternoonHigh = 400;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 250;
      desserthigh = 300;
    } else if (2550 > mdc && mdc >= 2500) {
      minMdc = 2350;
      maxMdc = 2650;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 400;
      lateMorninghigh = 450;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 350;
      afternoonHigh = 400;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 250;
      desserthigh = 300;
    } else if (2600 > mdc && mdc >= 2550) {
      minMdc = 2400;
      maxMdc = 2700;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 400;
      lateMorninghigh = 450;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 400;
      afternoonHigh = 450;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 250;
      desserthigh = 300;
    } else if (2650 > mdc && mdc >= 2600) {
      minMdc = 2450;
      maxMdc = 2750;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 450;
      lateMorninghigh = 500;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 400;
      afternoonHigh = 450;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 250;
      desserthigh = 300;
    } else if (2700 > mdc && mdc >= 2650) {
      minMdc = 2500;
      maxMdc = 2800;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 450;
      lateMorninghigh = 500;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 450;
      afternoonHigh = 500;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 250;
      desserthigh = 300;
    } else if (2750 > mdc && mdc >= 2700) {
      minMdc = 2550;
      maxMdc = 2850;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 450;
      lateMorninghigh = 500;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 450;
      afternoonHigh = 500;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 300;
      desserthigh = 350;
    } else if (2800 > mdc && mdc >= 2750) {
      minMdc = 2600;
      maxMdc = 2900;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 450;
      lateMorninghigh = 500;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 450;
      afternoonHigh = 500;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 350;
      desserthigh = 400;
    } else if (mdc >= 2800) {
      minMdc = 2650;
      maxMdc = 2950;
      firstlow = 450;
      firsthigh = 500;
      lateMorninglow = 450;
      lateMorninghigh = 500;
      secondlow = 450;
      secondhigh = 500;
      afternoonLow = 450;
      afternoonHigh = 500;
      thirdlow = 450;
      thirdhigh = 500;
      dessertlow = 400;
      desserthigh = 450;
    }

    if(bRanked==1){
      firstRankedMeal='Breakfast'
      if(lRanked==2)
      {
        secondRankedMeal='Lunch'; thirdRankedMeal='Dinner'
      }else{
        secondRankedMeal='Dinner'; thirdRankedMeal='Lunch'

      }
    } else if(bRanked==2){
      secondRankedMeal='Breakfast'
      if(lRanked==1)
      {
        firstRankedMeal='Lunch'; thirdRankedMeal='Dinner'
      }else{
        firstRankedMeal='Dinner'; thirdRankedMeal='Lunch'

      }
    }else {
      thirdRankedMeal='Breakfast'
      if(lRanked==1)
      {
        firstRankedMeal='Lunch'; secondRankedMeal='Dinner'
      }else{
        firstRankedMeal='Dinner'; secondRankedMeal='Lunch'

      }
    }
    setVisbile(true);

    setTimeout(()=>{
      setVisbile(false);
      if (navigateFlag)
      navigation.navigate('CustomizedFitnessPlan', {
        minMdc: minMdc,
        maxMdc: maxMdc,
        firstlow: firstlow,
        firsthigh: firsthigh,
        lateMorninglow: lateMorninglow,
        lateMorninghigh: lateMorninghigh,
        secondlow: secondlow,
        secondhigh: secondhigh,
        afternoonLow: afternoonLow,
        afternoonHigh: afternoonHigh,
        thirdlow: thirdlow,
        thirdhigh: thirdhigh,
        dessertlow: dessertlow,
        desserthigh: desserthigh,
        firstRankedMeal:firstRankedMeal,
        secondRankedMeal:secondRankedMeal,
        thirdRankedMeal:thirdRankedMeal
      });
    }, 4000);

    
    
  }
  return (
    <ScrollView
      style={styles.scrollView}>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          fontSize: 18,
          fontWeight: '600',
        }}>
        CUSTOMIZED PLAN
      </Text>
      <View
        style={{
          margin: 5,
          backgroundColor: '#e4e4e4',
          padding: 20,
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'center',
              flex: 2,
            }}>
            <Text style={{color: 'black', fontSize: 16}}>YOUR TIDE</Text>
            <Text style={{color: 'black', fontSize: 12}}>
              Use the Hourglass Calculator to calculate your total daily energy
              expernditure(TIDEE)
            </Text>
          </View>
          <TextInput
            style={{
              backgroundColor: '#5bcc00',
              paddingHorizontal: 5,
              fontSize: 18,
              borderColor: 'black',
              borderRadius: 5,
              borderWidth: 2,
              fontWeight: 'Bold',
              textAlign: 'center',
              marginStart: 5,
              flex: 1,
            }}>
            {TIDEE}
          </TextInput>
        </View>
      </View>
      <View
        style={{
          margin: 5,
          backgroundColor: '#e4e4e4',
          padding: 20,
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'center',
              flex: 2,
            }}>
            <Text style={{color: 'black', fontSize: 16}}>EATING HABITS</Text>
            <Text style={{color: 'black', fontSize: 12}}>
              Order your meals from biggest(1) to smallest(3) in a way that best
              aligns with your life
            </Text>
          </View>
          <View style={{flexDirection: 'column', flex: 2}}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                flex: 1,
                marginVertical: 5,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  flex: 2,
                  textAlign: 'right',
                  fontSize: 12,
                  marginEnd: 3,
                }}>
                BREAKFAST
              </Text>
              <TextInput
                value={bRanked}
                onChangeText={changeBRanked}
                style={{
                  backgroundColor: '#6b81bd',
                  flex: 1,
                  textAlign: 'center',
                }}></TextInput>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                flex: 1,
                marginVertical: 5,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  flex: 2,
                  textAlign: 'right',
                  fontSize: 12,
                  marginEnd: 3,
                }}>
                LUNCH
              </Text>
              <TextInput
                value={lRanked}
                onChangeText={changeLRanked}
                style={{
                  backgroundColor: '#6b81bd',
                  flex: 1,
                  textAlign: 'center',
                }}></TextInput>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                flex: 1,
                marginVertical: 5,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  flex: 2,
                  textAlign: 'right',
                  fontSize: 12,
                  marginEnd: 3,
                }}>
                DINNER
              </Text>
              <TextInput
                value={dRanked}
                onChangeText={changeDRanked}
                style={{
                  backgroundColor: '#6b81bd',
                  flex: 1,
                  textAlign: 'center',
                }}></TextInput>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          margin: 5,
          backgroundColor: '#e4e4e4',
          padding: 20,
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'center',
              flex: 2,
            }}>
            <Text style={{color: 'black', fontSize: 16}}>EXCERCISE</Text>
            <Text style={{color: 'black', fontSize: 12}}>
              I will try to increase my intentional excercise by this amount per
              week
            </Text>
          </View>
          <View style={{flexDirection: 'column', flex: 2}}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 2,
              }}>
              <Pressable
                onPress={() => selectIncrease('no')}
                style={
                  noIncreaseFlag == true
                    ? {backgroundColor: 'orange', flex: 1}
                    : {backgroundColor: '#6b81bd', flex: 1}
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingVertical: 3,
                    fontWeight: 'bold',
                  }}>
                  No Increase
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 2,
              }}>
              <Pressable
                onPress={() => selectIncrease('30')}
                style={
                  Increase30Flag == true
                    ? {backgroundColor: 'orange', flex: 1}
                    : {backgroundColor: '#6b81bd', flex: 1}
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingVertical: 3,
                    fontWeight: 'bold',
                  }}>
                  Increase 30 MIN/WEEK
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 2,
              }}>
              <Pressable
                onPress={() => selectIncrease('60')}
                style={
                  Increase60Flag == true
                    ? {backgroundColor: 'orange', flex: 1}
                    : {backgroundColor: '#6b81bd', flex: 1}
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingVertical: 3,
                    fontWeight: 'bold',
                  }}>
                  Increase 60 MIN/WEEK
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 2,
              }}>
              <Pressable
                onPress={() => selectIncrease('g60')}
                style={
                  Increaseg60Flag == true
                    ? {backgroundColor: 'orange', flex: 1}
                    : {backgroundColor: '#6b81bd', flex: 1}
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingVertical: 3,
                    fontWeight: 'bold',
                  }}>
                  Increase&gt; 60 MIN/WEEK
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          margin: 5,
          backgroundColor: '#e4e4e4',
          padding: 20,
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'center',
              flex: 2,
            }}>
            <Text style={{color: 'black', fontSize: 16}}>FITNESS LEVEL</Text>
          </View>
          <View style={{flexDirection: 'column', flex: 2}}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 2,
              }}>
              <Pressable
                onPress={() => selectHML('L')}
                style={
                  LowFlag == true
                    ? {backgroundColor: 'orange', flex: 1}
                    : {backgroundColor: '#6b81bd', flex: 1}
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingVertical: 3,
                    fontWeight: 'bold',
                  }}>
                  Low
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 2,
              }}>
              <Pressable
                onPress={() => selectHML('M')}
                style={
                  MediumFlag == true
                    ? {backgroundColor: 'orange', flex: 1}
                    : {backgroundColor: '#6b81bd', flex: 1}
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingVertical: 3,
                    fontWeight: 'bold',
                  }}>
                  Medium
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 2,
              }}>
              <Pressable
                onPress={() => selectHML('H')}
                style={
                  HighFlag == true
                    ? {backgroundColor: 'orange', flex: 1}
                    : {backgroundColor: '#6b81bd', flex: 1}
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingVertical: 3,
                    fontWeight: 'bold',
                  }}>
                  High
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          margin: 5,
          backgroundColor: '#e4e4e4',
          padding: 20,
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'center',
              flex: 2,
            }}>
            <Text style={{color: 'black', fontSize: 16}}>HEALTH GOALS</Text>
          </View>
          <View style={{flexDirection: 'column', flex: 2}}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 2,
              }}>
              <Pressable
                onPress={() => selectML('M')}
                style={
                  maintainFlag == true
                    ? {backgroundColor: 'orange', flex: 1}
                    : {backgroundColor: '#6b81bd', flex: 1}
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingVertical: 3,
                    fontWeight: 'bold',
                  }}>
                  Maintain my weight
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 2,
              }}>
              <Pressable
                onPress={() => selectML('L1')}
                style={
                  Lose1Flag == true
                    ? {backgroundColor: 'orange', flex: 1}
                    : {backgroundColor: '#6b81bd', flex: 1}
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingVertical: 3,
                    fontWeight: 'bold',
                  }}>
                  Lose 1LB/0.5KG/week
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 2,
              }}>
              <Pressable
                onPress={() => selectML('L2')}
                style={
                  Lose2Flag == true
                    ? {backgroundColor: 'orange', flex: 1}
                    : {backgroundColor: '#6b81bd', flex: 1}
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingVertical: 3,
                    fontWeight: 'bold',
                  }}>
                  Lose 2LB/1KG/week
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <Pressable style={styles.backbtn} onPress={calculate}>
        <Text style={styles.textback}>Create My Customized Plan</Text>
      </Pressable>
    </ScrollView>
  );
};

function CustomizedPlanCalculatorScreen({navigation, route}) {
  const TIDEE = route.params.TIDEE;
  const SEX = route.params.SEX;
  const [isVisible, setVisbile] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Modal            
          animationType = {"fade"}  
          transparent = {false}  
          visible = {isVisible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          <Timerc flag='true'/>
              <Text style={{textAlign:'center',fontSize:24}}>Calculating ...</Text>

        </Modal>  
      <CustomizedClacSection navigation={navigation} TIDEE={TIDEE} SEX={SEX} setVisbile={setVisbile} />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView:{
    borderRadius: 5,
    marginStart: 30,
    marginEnd: 30,
    padding: 10,
  },
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
    backgroundColor: '#445392',
    width: '60%',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
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
    marginBottom: 15,
    borderColor: 'black',
    borderWidth: 3,
  },
  textback: {
    color: 'black',
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default CustomizedPlanCalculatorScreen;
