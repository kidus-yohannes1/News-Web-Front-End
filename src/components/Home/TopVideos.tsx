import { Tag } from "antd";

function TopVideos() {
  const recentItems = [
    {
      Name: "በአዲስ አበባ ካሳንቺስ የተከሰተው የእሳት አደጋ",
      Tag: "FOOD",
      url: "https://www.youtube.com/embed/jIgn4twn3w0",
    },
    {
      Name: "ላሊበላው ተቃውሞ የመርሳው ተኩስ፣ 96 የፓርላማ ወንበር ባዶ ነው፣ ኤርዶጋን የምስራች ሰሙ",
      Tag: "SPORTS",
      url: "https://www.youtube.com/embed/-82DeBNncEI",
    },
    {
      Name: "አርሰናል ዋንጫውን አስረከበ? ARSENAL 3-0 Brighton",
      Tag: "SPORTS",
      url: "https://www.youtube.com/embed/EDjjWUojHGM",
    },
  ];
  return (
    <div className="top-video">
      <div className="top-video-title">
        <h1>Videos</h1>
        <h3>Top Videos</h3>
      </div>
      <div className="top-video-body">
        <div
          // style={{

          // }}
          className="top-video-body-left"
        >
          <iframe
            style={{
              boxSizing: "border-box",
              minHeight: "400px",
              marginRight: "5%",
            }}
            width="100%"
            src="https://www.youtube.com/embed/0ULhrPj9oBU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="top-video-body-right">
          {recentItems.map((recentItem, index) => (
            <div key={index} className="right-recent">
              <div>
                <iframe
                  width="200"
                  height="150"
                  style={{ paddingLeft: "5%" }}
                  src={`${recentItem.url}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div style={{ paddingLeft: "3%", color: "white" }}>
                <Tag
                  style={{ backgroundColor: "transparent" }}
                  color={"yellow"}
                >
                  {recentItem.Tag}
                </Tag>
                <h4>{recentItem.Name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TopVideos;
