import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import  Widget from './src/components/Widget';
import { theme } from './src/theme';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}>
        <StatusBar
          style="light"
          backgroundColor="trasparent"
          translucent
        />
         <Widget />

      </View>
    );
  }
};
