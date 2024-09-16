import RootLayout from "@/app/_layout";
import React from "react";
import { SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
        <RootLayout />
    </SafeAreaProvider>
  );
}
