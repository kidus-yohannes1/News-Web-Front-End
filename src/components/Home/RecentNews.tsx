import { Card, Tag } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { News } from "../../hooks/newsHook";
import { Player } from "@lottiefiles/react-lottie-player";
function RecentNews(props: { recentNews: News[]; banner: News[] }) {
  return (
    <div className="Recent-news">
      <div className="Recent-news-left">
        <Link to="/detail" state={props.banner[0]}>
          <Card
            className="Recent-news-left-card"
            bordered={false}
            cover={
              <img
                className="landingImage"
                alt="example"
                src={props.banner[0].picture}
              />
            }
          >
            <h1>{props.banner[0].title}</h1>
            <div className="Recent-news-left-tages">
              <span>{props.banner[0].author}</span>
              <span>{props.banner[0].CreatedAt}</span>
              <span>2K Views</span>
              <span>230 Shares</span>
            </div>
          </Card>
        </Link>
      </div>
      <div className="Recent-news-right">
        <div className="right-child">
          <div className="home-recent-heading-right">
            <h2>Recent Posts</h2>
            <h4>
              <a href="recentNews">All Recent Posts</a>
            </h4>
          </div>
          {props.recentNews.map((recentItem, index) => (
            <Link to="/detail" state={recentItem}>
              <div key={index} className="right-recent">
                <div>
                  <img
                    className="right-recent-image"
                    alt="example"
                    style={{
                      width: "140px",
                      height: "150px",
                    }}
                    src={`${recentItem.picture}`}
                  />
                </div>

                <div className="right-recent-discription">
                  <Tag className="right-recent-discription-tag" color={"white"}>
                    {recentItem.tag}
                  </Tag>
                  <div className="news-home-tab-disc">
                    <h3>{recentItem.title}</h3>{" "}
                    <p className="right-recent-discription-p">
                      {recentItem.author}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default RecentNews;
