import {Provider} from "react-redux";
import {store} from "./src/app/model/store/store";
import {App} from "./src";


export default function MainApp() {
  return (
      <Provider store={store}>
        <App/>
      </Provider>
  );
}

