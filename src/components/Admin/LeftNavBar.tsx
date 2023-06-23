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
    getItem("News List", "5"),
    getItem("Post News", "6"),
    getItem("Edit News", "7"),
    getItem("Option 8", "8"),
  ]),
  getItem("Categories", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
  ]),
];

function LeftNavBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedTab, setSelectedTab] = useState("dashBoard");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const onClick: MenuProps["onClick"] = (e) => {
    if ((e.key = "1")) {
      setSelectedTab("dashBoard");
    }
    if ((e.key = "2")) {
      setSelectedTab("news");
    }
    if ((e.key = "3")) {
      setSelectedTab("postNews");
    }
  };

  return (
    <div
      style={{
        width: 256,
        height: "100vh",
        backgroundColor: "black",
        position: "fixed",
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        style={{ height: "100vh" }}
      />
    </div>
  );
}

export default LeftNavBar;
