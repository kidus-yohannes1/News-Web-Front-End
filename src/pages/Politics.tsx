import { Tag } from "antd";
import { useEffect, useState } from "react";
import "../assets/styles/Category.css";
import { News } from "../hooks/newsHook";
function Politics() {
  const [politics, setPolitics] = useState<News[]>([]);
  const [data, setData] = useState<News[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/news/category/1")
      .then((response) => response.json())
      .then((json) => setPolitics(json.data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:4000/api/news/home")
      .then((response) => response.json())
      .then((json) => setData(json.Recent));
  }, []);
  if (politics != null) {
    return (
      <div className="category-component">
        <div className="category-component-title">
          <h1 style={{ alignItems: "center" }}>Politics News</h1>
        </div>
        <div className="category-component-body">
          <div className="category-component-body-left">
            {politics.map((politicsNews, index) => (
              <div key={index} className="right-category">
                <div>
                  <img
                    id="category-image"
                    alt="example"
                    style={{
                      width: "230px",
                      height: "250px",
                    }}
                    src={`${politicsNews.picture}`}
                  />
                </div>

                <div style={{ paddingLeft: "3%" }}>
                  <Tag style={{ backgroundColor: "red" }} color={"white"}>
                    {politicsNews.tag}
                  </Tag>
                  <h3>{politicsNews.title}</h3>
                  <p>{politicsNews.titleDescription}</p>
                  <p style={{ color: "gray" }}> {politicsNews.author}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="category-component-body-right">
            {data.length != 0 ? (
              <div style={{ display: "flex" }}>
                <div style={{ flex: 10 }}></div>
                <div style={{ flex: 90 }}>
                  <h2>You may also like</h2>
                  {data.map((recentItem, index) => (
                    <div key={index} className="right-recent">
                      <div>
                        <img
                          className="right-recent-image"
                          alt="example"
                          style={{
                            width: "140px",
                            height: "140px",
                          }}
                          src={`${recentItem.picture}`}
                        />
                      </div>

                      <div className="right-recent-discription">
                        <Tag
                          className="right-recent-discription-tag"
                          color={"white"}
                        >
                          {recentItem.tag}
                        </Tag>
                        <h5>{recentItem.title}</h5>
                        <p className="right-recent-discription-p">
                          {recentItem.author}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
  return <div>loading</div>;
}
export default Politics;
function setTopStories(TopStories: any): any {
  throw new Error("Function not implemented.");
}
