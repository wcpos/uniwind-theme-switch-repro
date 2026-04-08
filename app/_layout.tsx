import 'react-native-reanimated';
import '../global.css';

import { Stack } from 'expo-router';
import React from 'react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function RootLayout() {
  return (
    <React.Fragment>
      <Stack screenOptions={{ headerShown: false }} />
      <ThemeSwitcher />
    </React.Fragment>
  );
}
