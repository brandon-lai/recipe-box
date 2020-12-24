import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'; 
import Navigator from './routes/homeStack';

const getFonts = () => Font.loadAsync({
    'cereal-light': require('./assets/fonts/AirbnbCerealLight.ttf'),
    'cereal-medium': require('./assets/fonts/AirbnbCerealMedium.ttf'),
    'cereal-book': require('./assets/fonts/AirbnbCerealBook.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onError={console.warn}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}