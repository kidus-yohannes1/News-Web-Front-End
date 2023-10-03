import React, { useEffect, useState, useContext } from "react";
import {
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
  getItem("My News", "sub1", <MailOutlined />, [
    getItem("News List", "2"),
    getItem("Post News", "3"),
  ]),
  getItem("Logout", "5", <LogoutOutlined />),
];

function Author() {
  let { name } = useParams();
  const [collapsed, setCollapsed] = useState(false);
  const [role, SetRole] = useState<String>("");
  const cookies = new Cookies();
  const [user, setUser] = useState(useContext(userContext));
  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key === "1") {
      window.location.href = "/author/";
    }
    if (e.key === "2") {
      window.location.href = "/author/newslist";
    }
    if (e.key === "3") {
      window.location.href = "/author/postnews";
    }
    if (e.key === "5") {
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

  if (role == "author") {
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
            // defaultSelectedKeys={["1"]}
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
export default Author;
