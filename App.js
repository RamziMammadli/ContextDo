import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNav from './src/navigation/TabNav';
import { TodoProvider } from './src/Context/TodoStorage';


const App = () => {
  return (
    <TodoProvider>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </TodoProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
