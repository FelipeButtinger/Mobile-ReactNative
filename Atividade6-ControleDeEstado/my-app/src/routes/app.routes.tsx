import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Home from "../screens/Home";
type StackRoutesParams = {
  login: undefined;
  home: undefined;
};
export type StackNavigatorRoutesProps =
  NativeStackNavigationProp<StackRoutesParams>;

const Stack = createNativeStackNavigator<StackRoutesParams>();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};
export default StackRoutes;
