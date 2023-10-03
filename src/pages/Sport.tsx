import { Tag } from "antd";
import { useEffect, useState } from "react";
import "../assets/styles/Category.css";
import Footer from "../components/Footer";
import YouAlsolLike from "../components/YouAlsoLike";
import { getHomePage } from "../hooks/Http";
import { News } from "../hooks/newsHook";
function Sport() {
  const [Sport, setSport] = useState<News[]>([]);
  const [data, setData] = useState<News[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/news/category/4")
      .then((response) => response.json())
      .then((json) => setSport(json.data));
  }, []);
  useEffect(() => {
    (async () => {
      const home = await getHomePage();
      setData(home.Recent);
    })();
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
                      {sportnews.tag}
                    </Tag>
                  </div>

                  <h2>{sportnews.title}</h2>
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
export default Sport;
function setTopStories(TopStories: any): any {
  throw new Error("Function not implemented.");
}
