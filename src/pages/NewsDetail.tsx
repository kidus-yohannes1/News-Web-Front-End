import { Tag } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/newsDetail.css";
import { News } from "../hooks/newsHook";
function NewsDetail(props: any) {
  const location = useLocation();
  const propsData = location.state;
  console.log(propsData);

  const [data, setData] = useState<News[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/news/home")
      .then((response) => response.json())
      .then((json) => setData(json.Recent));
  }, []);
  return (
    <div className="news-detail">
      <div className="news-detail-left">
        <h1>{propsData.title}</h1>
        <img
          style={{ maxWidth: "100%", maxHeight: "70vh" }}
          src={propsData.picture}
          alt=""
        />
        <p style={{ whiteSpace: "pre-wrap" }}>{propsData.newsDescription}</p>
      </div>
      <div className="news-detail-right">
        <div className="news-detail-right-first"></div>
        <div className="news-detail-right-second">
          {data.length != 0 ? (
            <div>
              <h2>you may also like</h2>
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
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default NewsDetail;
