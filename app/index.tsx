import React from 'react';
import { ScrollView, Text, View } from 'react-native';

/**
 * Minimal reproduction: multiple components using theme-dependent
 * className props. When calling Uniwind.setTheme() via the FAB,
 * these components should all update — but on native (iOS + Android)
 * most of them retain the old theme's styles.
 */
export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="p-6 pt-safe-offset-6 gap-4 pb-safe-offset-24">
      <Text className="text-foreground text-2xl font-bold">Theme Switch Test</Text>
      <Text className="text-muted text-sm">
        Tap the 🎨 FAB to switch themes. On native, most of these cards will NOT update.
      </Text>

      {/* Card 1 */}
      <View className="bg-card rounded-2xl border border-border p-4 gap-2">
        <Text className="text-card-foreground text-lg font-semibold">Card (bg-card)</Text>
        <Text className="text-muted text-sm">This background should change on theme switch.</Text>
      </View>

      {/* Card 2 */}
      <View className="bg-surface rounded-2xl border border-border p-4 gap-2">
        <Text className="text-foreground text-lg font-semibold">Surface (bg-surface)</Text>
        <Text className="text-foreground-secondary text-sm">This background should also change.</Text>
      </View>

      {/* Card 3 */}
      <View className="bg-primary rounded-2xl p-4 gap-2">
        <Text className="text-primary-foreground text-lg font-semibold">Primary (bg-primary)</Text>
        <Text className="text-primary-foreground text-sm">Primary color should change too.</Text>
      </View>

      {/* Nested cards to test deeper component trees */}
      <View className="bg-card rounded-2xl border border-border p-4 gap-3">
        <Text className="text-card-foreground text-lg font-semibold">Nested Components</Text>
        <View className="bg-surface rounded-xl p-3 gap-2">
          <Text className="text-foreground text-sm font-medium">Nested surface</Text>
          <View className="bg-background rounded-lg p-2">
            <Text className="text-foreground text-xs">Deeply nested bg-background</Text>
          </View>
        </View>
      </View>

      {/* Multiple small items to demonstrate scale */}
      <View className="flex-row flex-wrap gap-2">
        {Array.from({ length: 12 }, (_, i) => (
          <View key={i} className="bg-card border border-border rounded-xl px-3 py-2">
            <Text className="text-card-foreground text-xs">Item {i + 1}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
