import React, { useContext, useEffect, useState } from "react";
import { Button, Radio, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { News } from "../../hooks/newsHook";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { userContext } from "../../App";
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
    title: "Hash-Tag",
    dataIndex: "hashTag",
    key: "hashTag",
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
        <Link to="/author/editnews" state={record}>
          <EditOutlined />
        </Link>
        <a>
          <DeleteOutlined />
        </a>
        {record.hashTag != "banner" ? (
          <Button
            onClick={() => {
              handelBanner(record.id);
            }}
          >
            Banner
          </Button>
        ) : null}
      </Space>
    ),
  },
];

function AuthorNewsList() {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [user, setUser] = useState(useContext(userContext));
  useEffect(() => {
    fetch(`http://localhost:4000/api/my/${user.id}`)
      .then((response) => response.json())
      .then((json) => setNewsList(json.data));
  }, []);
  if (newsList.length != 0) {
    return (
      <div style={{ width: "80vw", margin: "0% 2%" }}>
        <div className="news-list-title">
          <h2>Manage Users</h2>
          <Button
            onClick={() => (window.location.href = "adduser")}
            type="primary"
            size={"middle"}
          >
            Add User
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

export default AuthorNewsList;
