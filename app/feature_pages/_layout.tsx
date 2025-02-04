import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack     
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="add_pass" options={{ title: 'add_pass' }} />
  </Stack>;
}
