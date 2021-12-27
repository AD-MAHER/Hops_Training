import './App.css';
import Counter from './Component/Counter';
import {Provider} from "react-redux";
import Store from './Redux/Store/Store';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
  <Counter/>
    </div>
    </Provider>
  );
}

export default App;
