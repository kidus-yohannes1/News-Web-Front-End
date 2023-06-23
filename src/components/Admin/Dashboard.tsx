import { Card, Progress, Space } from "antd";
import { useEffect, useState } from "react";
import "../../assets/styles/Admin.css";
import { Category } from "../../hooks/newsHook";
import AreaChartt from "./AreaChart";
import Example from "./AreaChart";
import PieChartt from "./PieChart";
function DashBoard() {
  const items = [1, 2, 3, 4, 5];
  const [category, setTopCategory] = useState<Category[]>([]);
  const dataa: any = [];
  useEffect(() => {
    fetch("http://localhost:4000/api/category")
      .then((response) => response.json())
      .then((json) => setTopCategory(json.data));
  }, []);
  if (category.length != 0) {
    category.forEach((element) => {
      dataa.push({
        name: element.name,
        news: element.news.length,
      });
    });
  }
  if (category.length != 0) {
    return (
      <div
        className="dashboard"
        style={{ backgroundColor: "whitesmoke", width: "80vw" }}
      >
        <h1 style={{ paddingTop: "3%", paddingLeft: "5%" }}>DashBoard</h1>
        <div className="dashboard-top">
          <div className="dashboard-top-left">
            <AreaChartt data={dataa} />
            <div></div>
          </div>
          <div className="dashboard-top-right">
            {category.map((cat) => (
              <Card style={{ margin: "2%", color: "#8884d8", width: "40%" }}>
                <h1 style={{ textAlign: "center" }}>{cat.news.length}</h1>
                <h1 style={{ textAlign: "center" }}>{cat.name}</h1>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return <div>Loading</div>;
}
export default DashBoard;
