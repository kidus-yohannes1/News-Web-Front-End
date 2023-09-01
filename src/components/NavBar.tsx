import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "../assets/styles/NavBar.css";
import { Outlet } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

const { Search } = Input;

const { Header, Content, Footer } = Layout;

function NavBar() {
  function myFunction() {
    const x: HTMLElement | null = document.getElementById("myTopnav");
    if (x) {
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
  const onSearch = (value: string) => console.log(value);

  return (
    <>
      <div
        className="topnav"
        id="myTopnav"
        style={{ backgroundColor: "white" }}
      >
        <a href="/" className="active">
          <img
            src="src/assets/images/hagereLogo.png"
            width={"100px"}
            height={"70px"}
            style={{ padding: "0%" }}
          ></img>
        </a>
        <a style={{ paddingTop: "2%" }} href="/sport">
          <h3>Sport</h3>
        </a>
        <a style={{ paddingTop: "2%" }} href="/entertainment">
          <h3>Entertainment</h3>
        </a>
        <a style={{ paddingTop: "2%" }} href="/politics">
          <h3>Politics</h3>
        </a>
        <a className="search" style={{ paddingTop: "2%", marginLeft: "30vw" }}>
          <h3>
            <Search
              placeholder="search news"
              onSearch={onSearch}
              style={{ width: 300 }}
            />
          </h3>
        </a>
        <a
          href="javascript:void(0);"
          className="icon"
          onClick={() => myFunction()}
        >
          <i className="fa fa-bars"></i>
        </a>
      </div>
      <Outlet />
    </>
  );
}
export default NavBar;
