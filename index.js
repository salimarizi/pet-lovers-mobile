import { AppRegistry, Platform } from "react-native";
// import Routes from "./routes";
import Home from "./src/screens/Home";
import Owner from "./src/screens/Owner";

// const App = () => {
//   <Routes />;
// };

AppRegistry.registerComponent("main", () => Home);

if (Platform.OS === "web") {
  const rootTag =
    document.getElementById("root") || document.getElementById("main");
  AppRegistry.runApplication("main", { rootTag });
}

// import { AppRegistry, Platform } from "react-native";
// import Routes from "./routes";

// const App = () => {
//   <Routes />;
// };

// AppRegistry.registerComponent("main", () => App);

// if (Platform.OS === "web") {
//   const rootTag =
//     document.getElementById("root") || document.getElementById("main");
//   AppRegistry.runApplication("main", { rootTag });
// }
