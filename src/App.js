import "./App.css";
import Chatpage from "./pages/Chatpage";
import Music from "./pages/Music";

function App() {
  return <div className="App">
      <Route path="/" component={Music} exact />
      <Route path="/chats" component={Chatpage} />
    </div>;
}

export default App;
