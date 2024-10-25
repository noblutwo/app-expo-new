import RootLayout from "@/app/_layout";
import React, {useEffect} from "react";
import { SafeAreaProvider} from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {router, usePathname} from "expo-router";

export default function App() {

  return (
    <SafeAreaProvider>
        <RootLayout />
    </SafeAreaProvider>
  );
}
