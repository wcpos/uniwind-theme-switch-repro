import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Uniwind, useUniwind } from 'uniwind';

export function ThemeSwitcher() {
  const { theme } = useUniwind();
  const isDark = theme === 'dark';

  return (
    <View className="absolute bottom-safe-offset-4 left-3 right-3 flex-row gap-2 justify-center">
      <Pressable
        onPress={() => Uniwind.setTheme('light')}
        data-selected={!isDark}
        className="flex-1 py-3 rounded-2xl border border-border bg-surface items-center data-[selected=true]:bg-primary data-[selected=true]:border-primary active:opacity-80"
      >
        <Text
          className="text-sm font-semibold text-foreground data-[selected=true]:text-primary-foreground"
          data-selected={!isDark}
        >
          ☀️ Light
        </Text>
      </Pressable>
      <Pressable
        onPress={() => Uniwind.setTheme('dark')}
        data-selected={isDark}
        className="flex-1 py-3 rounded-2xl border border-border bg-surface items-center data-[selected=true]:bg-primary data-[selected=true]:border-primary active:opacity-80"
      >
        <Text
          className="text-sm font-semibold text-foreground data-[selected=true]:text-primary-foreground"
          data-selected={isDark}
        >
          🌙 Dark
        </Text>
      </Pressable>
    </View>
  );
}
