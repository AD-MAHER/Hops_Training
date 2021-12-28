import './App.css';
import Counter from './Component/Counter';
import {Provider} from "react-redux";
import Store from './Redux/Store/Store';
import ClassCounter from './Component/ClassCounter';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
  <Counter/>
  <ClassCounter/>
    </div>
    </Provider>
  );
}

export default App;
