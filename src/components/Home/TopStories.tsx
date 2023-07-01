import { Tag } from "antd";
import { useEffect, useState } from "react";
import { IHome, News } from "../../hooks/newsHook";

function TopStories(props: { topStories: News[] }) {
  const top_stories_body_left_Style: {
    flex: string;
    background: string;
    backgroundSize: string;
    backgroundRepeat: string;
    minHeight: string;
    color: string;
  } = {
    flex: "70%",
    background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)),url(${props.topStories[0].picture})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "250px",
    color: "white",
  };
  const top_stories_body_right_image: {
    background: string;
    backgroundSize: string;
    backgroundRepeat: string;
    minHeight: string;
    color: string;
    alignItems: string;
    paddingLeft: string;
  } = {
    background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)),url(${props.topStories[1].picture})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "250px",
    color: "white",
    alignItems: "baseline",
    paddingLeft: "2%",
  };

  return (
    <div className="top-stories">
      <div className="top-stories-title">
        <h1>Top Stories</h1>
        <h3>All Top Stories</h3>
      </div>
      <div className="top-stories-body">
        <div
          className="top-stories-body-left"
          style={top_stories_body_left_Style}
        >
          <Tag
            className="top-stories-body-left-tag"
            style={{
              backgroundColor: "green",
              marginTop: "300px",
              marginLeft: "3%",
              padding: "5px 10px",
              fontWeight: "bold",
              textAlign: "center",
            }}
            color={"white"}
          >
            {props.topStories[0].tag}
          </Tag>
          <h3 style={{ fontSize: "40px", marginLeft: "3%" }}>
            {props.topStories[0].title}
          </h3>

          <p className="top-stories-body-left-author">
            {props.topStories[0].author}
          </p>
        </div>
        <div
          className="top-stories-body-right"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            id="right-image-1"
            style={top_stories_body_right_image}
            className="top-stories-body-right-image"
          >
            <Tag
              style={{ backgroundColor: "red", marginTop: "100px" }}
              color={"white"}
            >
              {props.topStories[1].tag}
            </Tag>
            <h3>{props.topStories[1].title}</h3>

            <p style={{ color: "gray" }}> {props.topStories[1].author}</p>
          </div>
          <div
            style={top_stories_body_right_image}
            className="top-stories-body-right-image"
          >
            <Tag
              style={{ backgroundColor: "blue", marginTop: "100px" }}
              color={"white"}
            >
              {props.topStories[1].tag}
            </Tag>
            <h3 id="k1">{props.topStories[1].title}</h3>
            <p
              className="top-stories-body-right-author"
              style={{ color: "gray" }}
            >
              {" "}
              {props.topStories[1].author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopStories;
