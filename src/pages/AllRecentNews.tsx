import { Tag } from "antd";
import { useEffect, useState } from "react";
import { News } from "../hooks/newsHook";
import { allRecent } from "../hooks/Http";

function AllRecentNews() {
  const [recentNews, setRecentNews] = useState<News[]>([]);
  console.log(recentNews);

  useEffect(() => {
    (async () => {
      const home = await allRecent();
      setRecentNews(home.data);
    })();
  }, []);

  if (recentNews != null) {
    return (
      <div className="trending-stories" style={{ paddingBottom: "20vh" }}>
        <div className="trending-stories-title">
          <h1>Recent News</h1>
        </div>
        <div className="trending-stories-body">
          {recentNews.map((news: News, index: any) => (
            <div key={index} className="right-recent">
              <div>
                <img
                  alt="example"
                  style={{
                    width: "140px",
                    height: "150px",
                  }}
                  src={`${news.picture}`}
                />
              </div>

              <div style={{ paddingLeft: "3%" }}>
                <Tag style={{ backgroundColor: "red" }} color={"white"}>
                  {news.tag}
                </Tag>
                <div className="news-home-tab-disc">
                  <h3>{news.title}</h3>
                  <p style={{ color: "gray" }}> {news.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <div>loading</div>;
}
export default AllRecentNews;
