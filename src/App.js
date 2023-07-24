import "./App.css";
import Chatpage from "./pages/Chatpage";
import Music from "./pages/Music";
import { Route } from "react-router-dom";

function App() {
  return <div className="App">
      <Route path="/" component={Music} exact />
      <Route path="/chats" component={Chatpage} />
    </div>;
}

export default App;
