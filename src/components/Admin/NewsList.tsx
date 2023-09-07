import React, { useEffect, useState } from "react";
import { Button, Radio, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { News } from "../../hooks/newsHook";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
function handelBanner(id: Number) {
  var formdata = new FormData();

  var requestOptions: any = {
    method: "PATCH",
    body: formdata,
    redirect: "follow",
  };

  fetch(`http://localhost:4000/api/banner/${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.success == true) {
        alert("you have successfully changed a banner");
        window.location.reload();
      } else {
        alert("unable to change the banner");
      }
    })
    .catch((error) => console.log("error", error));
}
function handelDelete(id: Number) {
  var formdata = new FormData();

  var requestOptions: any = {
    method: "Delete",
    body: formdata,
    redirect: "follow",
  };

  fetch(`http://localhost:4000/api/news/${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.success == true) {
        alert("you have successfully deleted a news");
        window.location.reload();
      } else {
        alert("unable to delete the news");
      }
    })
    .catch((error) => console.log("error", error));
}

const columns: ColumnsType<News> = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tag",
    dataIndex: "tag",
    key: "tag",
    render: (tags: string) => (
      <Tag color={tags == "ቢዝነስ" || tags == "ማህበራዊ" ? "red" : "green"}>
        {tags.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "Author",
    key: "author",
    dataIndex: "author",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Delete</a> */}
        <Link to="/admin/editnews" state={record}>
          <EditOutlined />
        </Link>
        <a>
          <DeleteOutlined
            onClick={() => {
              handelDelete(record.id);
            }}
          />
        </a>
        {record.hashTag != "banner" ? (
          <a
            onClick={() => {
              handelBanner(record.id);
            }}
          >
            Banner
          </a>
        ) : null}
      </Space>
    ),
  },
];

function NewsList() {
  const [newsList, setNewsList] = useState<News[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/news")
      .then((response) => response.json())
      .then((json) => setNewsList(json.data));
  }, []);
  if (newsList.length != 0) {
    return (
      <div style={{ width: "80vw", margin: "0% 2%" }}>
        <div className="news-list-title">
          <h2>News List</h2>
          <Button
            onClick={() => (window.location.href = "adduser")}
            type="primary"
            size={"middle"}
          >
            Post News
          </Button>
        </div>
        <br></br>
        <hr></hr>
        <Table
          className="news-list-table"
          columns={columns}
          dataSource={newsList}
        />
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default NewsList;
