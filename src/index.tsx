import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Provider from "./provider";
import Routes from "./routes/index.routes";
import MovieProvider from "./provider/movie";

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <Provider>
        <MovieProvider>
          <StatusBar hidden />
          <Routes />
        </MovieProvider>
      </Provider>
    </NavigationContainer>
  );
}
