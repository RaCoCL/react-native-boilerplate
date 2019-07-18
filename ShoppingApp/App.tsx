import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, I18nManager } from 'react-native';
import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';

I18nManager.forceRTL(false);

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});

const slides = [
  {
    key: 'somethun',
    title: 'JP Chupalpico, con moco',
    text:
        'esta puede ser la pagina de inicio para las noticias de la empresa',
    icon: 'ios-images',
    colors: ['#63E2FF', '#B066FE'],
  },
  {
    key: 'somethun1',
    title: 'Arremangamelpoico',
    text:
        'nos hace falta un disenador grafico decente que nos haga cositas lindas aqui',
    icon: 'ios-options',
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 'somethun2',
    title: 'Terrible Jefe',
    text: 'traete unas sopaipas',
    icon: 'ios-beer',
    colors: ['#29ABE2', '#4F00BC'],
  },
];

export default class App extends React.Component {
  _renderItem = ({item, dimensions}) => (
      <LinearGradient
          style={[
            styles.mainContent,
            {
              flex: 1,
              paddingTop: item.topSpacer,
              paddingBottom: item.bottomSpacer,
              width: dimensions.width,
            },
          ]}
          colors={item.colors}
          start={{x: 0, y: 0.1}}
          end={{x: 0.1, y: 1}}
      >
        <Ionicons
            style={{backgroundColor: 'transparent'}}
            name={item.icon}
            size={200}
            color="white"
        />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </LinearGradient>
  );

  render() {
    return (
        <AppIntroSlider
            slides={slides}
            renderItem={this._renderItem}
            // bottomButton
            showPrevButton
            showSkipButton
            // hideNextButton
            // hideDoneButton
            // onSkip={() => console.log("skipped")}
        />
    );
  }
}
