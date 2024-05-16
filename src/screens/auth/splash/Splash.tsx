import React, {FC} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import styles from './splash.style';
import {Button, CustomStatusbar} from '../../../components/componentsIndex';
import useSplash from './useSplash';
import imageIndex from '../../../assets/imageIndex';
import SvgIndex from '../../../assets/svgIndex';
import color from '../../../theme/color';


const Splash: FC = () => {
  const {onClickSignUp, onClickLogin} = useSplash();

  return (
    <ImageBackground
      source={{uri:"https://img.freepik.com/premium-photo/stand-alone-solar-panel-system-installation-renewable-green-energy_10069-5651.jpg?w=360"}}
      style={styles.container}
      resizeMode="stretch">
      <CustomStatusbar
        backgroundColor={color.transparent}
        translucent={true}
        barStyle="light-content"
      />
      <View style={styles.mainContainer}>
        <View style={styles.textView}>
          <SvgIndex.homeLogo />
          <Text style={styles.servicesText}>
            All services on your Fingertips.
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Button
            label="Log In"
            onPress={onClickLogin}
            containerStyle={styles.solidContainerStyle}
          />
          <Button
            label="Sign Up"
            onPress={onClickSignUp}
            containerStyle={styles.containerStyle}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Splash;
 