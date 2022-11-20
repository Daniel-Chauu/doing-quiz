import "./App.scss";
import Header from "./Components/Header/Header";
import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidebar-container">
          <h1>sidebar</h1>
        </div>
      </div>
      <div className="app-content">
        <h1>app-content</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
