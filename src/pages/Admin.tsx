import React, { useContext, useEffect, useState } from "react";
import {
  AppstoreOutlined,
  LogoutOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Outlet, useParams } from "react-router-dom";
import PageNoFound from "./PageNotFound";
import logo from "../assets/images/hagereLogo2.png";
import Cookies from "universal-cookie";
import { Player } from "@lottiefiles/react-lottie-player";
import { userContext } from "../App";
import { auth } from "../hooks/Http";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem("DashBoard", "1", <PieChartOutlined />),
  getItem("News", "sub1", <MailOutlined />, [
    getItem("News List", "2"),
    getItem("Post News", "3"),
  ]),
  getItem("Users", "sub2", <AppstoreOutlined />, [
    getItem("Users List", "6"),
    getItem("Add User", "7"),
  ]),
  getItem("Logout", "8", <LogoutOutlined />),
];

function Admin() {
  let { name } = useParams();
  const [collapsed, setCollapsed] = useState(false);
  const cookies = new Cookies();
  const [role, SetRole] = useState<string>("");
  const [user, setUser] = useState(useContext(userContext));

  const onClick: MenuProps["onClick"] = (e) => {
    console.log(e);

    if (e.key === "1") {
      window.location.href = "/admin/";
    }
    if (e.key === "2") {
      window.location.href = "/admin/newslist";
    }
    if (e.key === "3") {
      window.location.href = "/admin/postnews";
    }
    if (e.key === "6") {
      window.location.href = "/admin/userslist";
    }
    if (e.key === "7") {
      window.location.href = "/admin/adduser";
    }
    if (e.key === "8") {
      cookies.remove("token", { path: "/" });
      cookies.remove("name", { path: "/" });
      window.location.href = "/login";
    }
  };
  useEffect(() => {
    if (cookies.get("token")) {
      (async () => {
        const home = await auth(cookies.get("token"));
        setUser(home.data);
      })();
    }
  }, []);

  if (role == "admin") {
    return (
      <div
        className="admin2"
        style={{ display: "flex", backgroundColor: "whitesmoke" }}
      >
        <div style={{ width: 256, backgroundColor: "black", height: "100vh" }}>
          <div style={{ backgroundColor: "white" }}>
            <img
              src={logo}
              width={"100px"}
              height={"70px"}
              style={{ padding: "0%", display: "block", margin: "0 auto" }}
            ></img>
          </div>

          <Menu
            onClick={onClick}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
          />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    );
  }
  if (role == "unknown") {
    return <PageNoFound />;
  } else {
    return (
      <Player
        src="src/assets/images/loading.json"
        className="player"
        loop
        autoplay
      />
    );
  }
}
export default Admin;
