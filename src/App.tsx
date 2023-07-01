import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Category from "./pages/Sport";
import Admin from "./pages/Admin";
import Sport from "./pages/Sport";
import Entertainment from "./pages/Entertainment";
import Politics from "./pages/Politics";
import NewsDetail from "./pages/NewsDetail";
import Admin2 from "./pages/Admin2";
import Login from "./pages/Login";
import Todo from "./pages/Nebil";
import PageNoFound from "./pages/PageNotFound";
import DashBoard from "./components/Admin/Dashboard";
import NewsList from "./components/Admin/NewsList";
import PostNews from "./components/Admin/PostNews";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <NavBar selectedPage="">
        <Home />
      </NavBar> */}

      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/detail" element={<NewsDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/nebil" element={<Todo />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<DashBoard />} />
            <Route path="newslist" element={<NewsList />} />
            <Route path="postnews" element={<PostNews />} />
          </Route>
          {/* <Route path="/admin2/:name" element={<Admin2 />} /> */}
          <Route path="*" element={<PageNoFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
