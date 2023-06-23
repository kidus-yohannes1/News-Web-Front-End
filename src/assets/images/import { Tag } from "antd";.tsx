import { Tag } from "antd";
import { useEffect, useState } from "react";
import { News } from "../../hooks/newsHook";

function TrendingNews() {
  const [trendingNews, setTrendingNews] = useState<News[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/news/home")
      .then((response) => response.json())
      .then((json) => setTrendingNews(json.TrendingNews));
  }, []);
  const recentItems = [
    {
      Name: "Crispy Air Fryer Parmesan And Thyme Roasted Wedge Fries",
      Tag: "FOOD",
      Author: "kidus yohannes",
      Image: "src/assets/images/post_7.jpeg",
    },
    {
      Name: "Get Around Easily With A New York Limousine Service",
      Tag: "SPORTS",
      Author: "kidus yohannes",
      Image: "src/assets/images/post_9.jpeg",
    },
    {
      Name: "Here, I Focus On A Range Of Items And Features",
      Tag: "SWIMMING",
      Author: "kidus yohannes",
      Image: "src/assets/images/post_6.jpeg",
    },
    {
      Name: "Crispy Air Fryer Parmesan And Thyme Roasted Wedge Fries",
      Tag: "FOOD",
      Author: "kidus yohannes",
      Image: "src/assets/images/post_7.jpeg",
    },
  ];
  if (trendingNews.length != 0) {
    return (
      <div className="trending-stories">
        <div className="trending-stories-title">
          <h1>Trending Stories</h1>
          <h3>Trending Stories</h3>
        </div>
        <div className="trending-stories-body">
          <div className="trending-stories-body-left">
            {recentItems.map((recentItem, index) => (
              <div key={index} className="right-recent">
                <div>
                  <img
                    alt="example"
                    style={{
                      width: "140px",
                      height: "150px",
                    }}
                    src={`${recentItem.Image}`}
                  />
                </div>

                <div style={{ paddingLeft: "3%" }}>
                  <Tag style={{ backgroundColor: "red" }} color={"white"}>
                    {recentItem.Tag}
                  </Tag>
                  <h3>{recentItem.Name}</h3>
                  <p style={{ color: "gray" }}> {recentItem.Author}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="trending-stories-body-left">
            {recentItems.map((recentItem, index) => (
              <div key={index} className="right-recent">
                <div>
                  <img
                    alt="example"
                    style={{
                      width: "140px",
                      height: "150px",
                    }}
                    src={`${recentItem.Image}`}
                  />
                </div>
  
                <div style={{ paddingLeft: "3%" }}>
                  <Tag style={{ backgroundColor: "red" }} color={"white"}>
                    {recentItem.Tag}
                  </Tag>
                  <h3>{recentItem.Name}</h3>
                  <p style={{ color: "gray" }}> {recentItem.Author}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    );
  }
  return <div>loading</div>;
}
export default TrendingNews;
