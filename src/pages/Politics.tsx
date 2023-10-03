import { Tag } from "antd";
import { useEffect, useState } from "react";
import "../assets/styles/Category.css";
import Footer from "../components/Footer";
import YouAlsolLike from "../components/YouAlsoLike";
import { getHomePage } from "../hooks/Http";
import { News } from "../hooks/newsHook";
function Politics() {
  const [politics, setPolitics] = useState<News[]>([]);
  const [data, setData] = useState<News[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/news/category/4")
      .then((response) => response.json())
      .then((json) => setPolitics(json.data));
  }, []);
  useEffect(() => {
    (async () => {
      const home = await getHomePage();
      setData(home.Recent);
    })();
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
                      {politicsNews.tag}
                    </Tag>
                  </div>

                  <h2>{politicsNews.title}</h2>
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
                  <YouAlsolLike />
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return <div>loading</div>;
}
export default Politics;
function setTopStories(TopStories: any): any {
  throw new Error("Function not implemented.");
}
