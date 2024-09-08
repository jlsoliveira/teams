import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import { Loading } from "@/components";
import { Players } from "@/screens";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
