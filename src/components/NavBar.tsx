import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, Tag, theme } from "antd";
import "../assets/styles/NavBar.css";
import { Outlet } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { News } from "../hooks/newsHook";

const { Search } = Input;

const { Header, Content, Footer } = Layout;

function NavBar() {
  const [searchValue, setSearchValue] = useState<News[]>([]);
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
  const onSearch = (value: string) => {
    if (value != "") {
      fetch(`http://localhost:4000/api/search/${value}`)
        .then((response) => response.json())
        .then((json) => setSearchValue(json.data))
        .catch((e) => console.log(e));
    }
  };

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
      {searchValue.length == 0 ? (
        <Outlet />
      ) : (
        <div style={{ margin: "5% 10%" }}>
          {searchValue.map((search, index) => (
            <div key={index} className="right-category">
              <div>
                <img
                  id="category-image"
                  alt="example"
                  style={{
                    width: "230px",
                    height: "250px",
                  }}
                  src={`${search.picture}`}
                />
              </div>

              <div
                style={{
                  paddingLeft: "3%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <Tag style={{ backgroundColor: "red" }} color={"white"}>
                    {search.tag}
                  </Tag>
                </div>

                <h2>{search.title}</h2>
                <p>{search.titleDescription}</p>
                <p style={{ color: "gray" }}> {search.author}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default NavBar;
