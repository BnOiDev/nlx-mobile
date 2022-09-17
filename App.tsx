import { StatusBar } from 'react-native';
import {useFonts,Inter_400Regular,Inter_600SemiBold,Inter_700Bold,Inter_900Black} from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';
import {Loading} from './src/Components/Loading';
import { Background } from './src/Components/Background';

export default function App() {
  const [fontsLoaded] = useFonts({
    useFonts,
      Inter_400Regular,
      Inter_600SemiBold,
      Inter_700Bold,
      Inter_900Black
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Home/>: <Loading/>}
      
    </Background>
  );
}
