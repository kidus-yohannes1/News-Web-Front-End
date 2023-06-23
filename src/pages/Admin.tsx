import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import AdminContent from "../components/Admin/AdminContent";
import { Outlet, useParams } from "react-router-dom";
import PageNoFound from "./PageNotFound";

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
    getItem("Edit News", "4"),
    getItem("Option 8", "5"),
  ]),
  getItem("Categories", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "6"),
    getItem("Option 10", "7"),
  ]),
];

function Admin1() {
  // const search = props.location.search; // returns the URL query String
  // const params = new URLSearchParams(search);
  // const nameFromURL = params.get("name");
  // alert(nameFromURL);
  let { name } = useParams();

  const [collapsed, setCollapsed] = useState(false);
  const [selectedTab, setSelectedTab] = useState("dashBoard");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const onClick: MenuProps["onClick"] = (e) => {
    console.log(e);

    if (e.key === "1") {
      window.location.href = "/admin/dashboard";
      // setSelectedTab("");
    }
    if (e.key === "2") {
      window.location.href = "/admin/newslist";
      // setSelectedTab("news");
    }
    if (e.key === "3") {
      window.location.href = "/admin/postnews";
      // setSelectedTab("postNews");
    }
  };

  return (
    <div
      className="admin2"
      style={{ display: "flex", backgroundColor: "whitesmoke" }}
    >
      <div style={{ width: 256, backgroundColor: "black", height: "100vh" }}>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
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
export default Admin1;
