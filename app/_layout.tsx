import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack     
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="index" options={{ title: 'index' }} />
    <Stack.Screen name="home" options={{ title: 'home' }} />
    <Stack.Screen name="export" options={{ title: 'export' }} />
    <Stack.Screen name="archived" options={{ title: 'archived' }} />
    <Stack.Screen name="safety" options={{ title: 'archived' }} />
  </Stack>;
}
