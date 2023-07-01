import { Tag } from "antd";
import { useEffect, useState } from "react";
import { News } from "../../hooks/newsHook";

function TrendingNews(props: { trendingNews: News[] }) {
  return (
    <div className="trending-stories">
      <div className="trending-stories-title">
        <h1>Trending Stories</h1>
        <h3>Trending Stories</h3>
      </div>
      <div className="trending-stories-body">
        {props.trendingNews.map((trendingNews: News, index: any) => (
          <div key={index} className="right-recent">
            <div>
              <img
                alt="example"
                style={{
                  width: "140px",
                  height: "150px",
                }}
                src={`${trendingNews.picture}`}
              />
            </div>

            <div style={{ paddingLeft: "3%" }}>
              <Tag style={{ backgroundColor: "red" }} color={"white"}>
                {trendingNews.tag}
              </Tag>
              <div className="news-home-tab-disc">
                <h3>{trendingNews.title}</h3>
                <p style={{ color: "gray" }}> {trendingNews.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TrendingNews;
