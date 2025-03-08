import "./app.css";
import Feed from "./components/feed/Feed";
import LeftBar from "./components/left_bar/Leftbar";
import TopBar from "./components/top_bar/TopBar";

const App = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Feed />
      </div>
    </div>
  );
};

export default App;
