import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
  
}

export default App;
