import { StyleSheet } from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider
      config={{
        suppressColorAccessibilityWarning: true, //コンストラスト警告を抑止する
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            contentStyle: {
              backgroundColor: "white",
            },
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} options={{
              headerShown: false,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
