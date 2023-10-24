import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen_1 from './src/component/Screen_1';
import Screen_2 from './src/component/Screen_2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen_3 from './src/component/Screen_3';
import Screen_4 from './src/component/Screen_4';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='scree1'>
        <Stack.Screen name='screen1' component={Screen_1} options={{headerShown:false}}/>
        <Stack.Screen name='screen2' component={Screen_2}/>
        <Stack.Screen name='screen3' component={Screen_3}/>
        <Stack.Screen name='screen4' component={Screen_4}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
