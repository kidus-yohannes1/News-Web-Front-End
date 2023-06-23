import { Tag } from "antd";
import { useEffect, useState } from "react";
import "../assets/styles/Category.css";
import { News } from "../hooks/newsHook";
function Sport() {
  const [Sport, setSport] = useState<News[]>([]);
  const [data, setData] = useState<News[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/news/category/2")
      .then((response) => response.json())
      .then((json) => setSport(json.data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:4000/api/news/home")
      .then((response) => response.json())
      .then((json) => setData(json.Recent));
  }, []);
  if (Sport != null) {
    return (
      <div className="category-component">
        <div className="category-component-title">
          <h1 style={{ alignItems: "center" }}>Sports News</h1>
        </div>
        <div className="category-component-body">
          <div className="category-component-body-left">
            {Sport.map((sportnews, index) => (
              <div key={index} className="right-category">
                <div>
                  <img
                    id="category-image"
                    alt="example"
                    style={{
                      width: "230px",
                      height: "250px",
                    }}
                    src={`${sportnews.picture}`}
                  />
                </div>

                <div style={{ paddingLeft: "3%" }}>
                  <Tag style={{ backgroundColor: "red" }} color={"white"}>
                    {sportnews.tag}
                  </Tag>
                  <h3>{sportnews.title}</h3>
                  <p>{sportnews.titleDescription}</p>
                  <p style={{ color: "gray" }}> {sportnews.author}</p>
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
export default Sport;
function setTopStories(TopStories: any): any {
  throw new Error("Function not implemented.");
}
