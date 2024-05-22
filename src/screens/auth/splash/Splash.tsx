import React, {FC} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
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
      source={imageIndex.imageBackground}
      style={styles.container}
      resizeMode="stretch">
      <CustomStatusbar
        backgroundColor={color.transparent}
        translucent={true}
        barStyle="light-content"
      />
      <Animatable.View 
        animation="fadeInDown"
        duration={3000}
        style={styles.mainContainer}
      >
        <Animatable.View 
          animation="bounceIn"
          duration={2000}
          style={styles.textView}
        >
          <SvgIndex.homeLogo />
          <Text style={styles.servicesText}>
            All services on your Fingertips.
          </Text>
        </Animatable.View>
        <Animatable.View 
          animation="fadeInUp"
          duration={1500}
          style={styles.contentContainer}
        >
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
        </Animatable.View>
      </Animatable.View>
    </ImageBackground>
  );
};

export default Splash;
