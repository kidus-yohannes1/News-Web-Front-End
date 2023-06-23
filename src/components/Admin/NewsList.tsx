import React, { useEffect, useState } from "react";
import { Radio, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { News } from "../../hooks/newsHook";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<News> = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  //   {
  //     title: "Age",
  //     dataIndex: "age",
  //     key: "age",
  //   },
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
        {/* <a>Invite {record.title}</a> */}
        <a>Delete</a>
      </Space>
    ),
  },
];

// const data: DataType[] = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];
function NewsList() {
  const [newsList, setNewsList] = useState<News[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/news")
      .then((response) => response.json())
      .then((json) => setNewsList(json.data));
  }, []);
  if (newsList.length != 0) {
    return (
      <div style={{ width: "80vw" }}>
        {/* <div>
            <Radio.Group
              style={{ marginBottom: 10 }}
            //   options={topOptions}
              value={top}
              onChange={(e) => {
                setTop(e.target.value);
              }}
            />
          </div> */}
        {/* <Radio.Group
            style={{ marginBottom: 10 }}
            options={bottomOptions}
            value={bottom}
            onChange={(e) => {
              setBottom(e.target.value);
            }}
          /> */}
        <Table
          columns={columns}
          // pagination={{ position: [top, bottom] }}
          dataSource={newsList}
        />
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default NewsList;
