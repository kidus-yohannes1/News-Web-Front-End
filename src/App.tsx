import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Admin from "./pages/Admin";
import Sport from "./pages/Sport";
import Entertainment from "./pages/Entertainment";
import Politics from "./pages/Politics";
import NewsDetail from "./pages/NewsDetail";
import Login from "./pages/Login";
import Todo from "./pages/Nebil";
import PageNoFound from "./pages/PageNotFound";
import DashBoard from "./components/Admin/Dashboard";
import NewsList from "./components/Admin/NewsList";
import PostNews from "./components/Admin/PostNews";
import UsersList from "./components/Admin/UsersList";
import AddUser from "./components/Admin/AddUser";
import Successfully from "./components/Admin/successfully";
import Author from "./pages/Author";
import AuthorNewsList from "./components/Author/NewsList";
import AuthorPostNews from "./components/Author/PostNews";
import AuthorDashBoard from "./components/Author/Dashboard";
import React from "react";
import { IUser } from "./hooks/newsHook";
import Cookies from "universal-cookie";

const initialUser: IUser = {
  id: 0,
  name: "",
  userName: "",
  email: "",
  password: "",
  role: "",
  token: "",
  CreatedAt: "",
};

export const userContext = createContext<IUser>({} as IUser);

function App() {
  // const data = React.useContext(userContext);
  const [user, setUser] = useState<IUser>(initialUser);
  const cookies = new Cookies();
  useEffect(() => {
    if (cookies.get("token")) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", cookies.get("token"));
      var requestOptions: any = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch("http://localhost:4000/users/auth", requestOptions)
        .then((response) => response.json())
        .then((json) => {
          setUser(json.data);
        })
        .catch((e) => console.log(e));
    }
  }, [App]);

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
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
              <Route path="userslist" element={<UsersList />} />
              <Route path="adduser" element={<AddUser />} />
              <Route path="successfully" element={<Successfully />} />
            </Route>
            <Route path="/author" element={<Author />}>
              <Route index element={<AuthorDashBoard />} />
              <Route path="newslist" element={<AuthorNewsList />} />
              <Route path="postnews" element={<AuthorPostNews />} />
              <Route path="successfully" element={<Successfully />} />
            </Route>
            <Route path="*" element={<PageNoFound />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
