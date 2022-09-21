import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import { Calculadora } from './src/components/calculadora';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      {/* <StatusBar />
      <Cesta /> */}
      <Calculadora />
    </SafeAreaView>
  );
}
