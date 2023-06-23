import RecentNews from "../components/Home/RecentNews";
import TopStories from "../components/Home/TopStories";
import TopVideos from "../components/Home/TopVideos";
import TrendingNews from "../components/Home/TrendingNews";
import "../assets/styles/Home.css";
import { IHome, News } from "../hooks/newsHook";
import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import getHomePage from "../hooks/Http";
import Advertisment from "../components/Home/Advertisment";
import Footer from "../components/Footer";
function Home() {
  const [data, setData] = useState<IHome>({
    message: "loading",
    Banner: [],
    Recent: [],
    TopStories: [],
    TreandingNews: [],
  });

  useEffect(() => {
    (async () => {
      const home = await getHomePage();
      setData(home);
    })();
  }, []);
  if (data.message == "success") {
    return (
      <div className="HomeDiv">
        <RecentNews recentNews={data.Recent} banner={data.Banner} />
        <TopStories topStories={data.TopStories} />
        <TrendingNews trendingNews={data.TreandingNews} />
        <TopVideos />
        <Advertisment />
        <Footer />
      </div>
    );
  }
  if (data.message == "loading") {
    return (
      <Player
        src="src/assets/images/loading.json"
        className="player"
        loop
        autoplay
      />
    );
  } else {
    return <div>Can Not find your request</div>;
  }
}
export default Home;
