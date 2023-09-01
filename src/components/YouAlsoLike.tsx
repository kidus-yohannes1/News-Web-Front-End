import { Tag } from "antd";
import { useEffect, useState } from "react";
import { News } from "../hooks/newsHook";

function YouAlsolLike() {
  const [data, setData] = useState<News[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/news/home")
      .then((response) => response.json())
      .then((json) => setData(json.Recent));
  }, []);
  return (
    <div>
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

          <div
            className="right-recent-discription"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <Tag className="right-recent-discription-tag" color={"white"}>
                {recentItem.tag}
              </Tag>
            </div>

            <h5>{recentItem.title}</h5>
            <p className="right-recent-discription-p">{recentItem.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default YouAlsolLike;
