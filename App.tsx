import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home/index";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      ></StatusBar>
      <Home></Home>
    </>
  );
}
