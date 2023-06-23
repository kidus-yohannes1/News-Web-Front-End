import DashBoard from "./Dashboard";
import NewsList from "./NewsList";
import PostNews from "./PostNews";

function AdminContent(props: any) {
  console.log(props.body);
  if (props.body == "dashBoard") {
    return <DashBoard />;
  }
  if (props.body == "news") {
    return <NewsList />;
  }
  if (props.body == "postNews") {
    return <PostNews />;
  }
  return <div>dsjkhdsjhkshkjkjh</div>;
}
export default AdminContent;
