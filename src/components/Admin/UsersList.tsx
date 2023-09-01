import React, { useEffect, useState } from "react";
import { Button, Radio, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IUser, News } from "../../hooks/newsHook";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
function deleteUser(id: String) {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImVtYWlsIjoiYm9uaUBnbWFpbC5jb20iLCJpYXQiOjE2ODcxNjE2NDQsImV4cCI6MTY4NzE2ODg0NH0.hSCeLcP6XuYIKmBaZyA19K0zMR4aiI4YJzfD09VWKQY"
  );

  var urlencoded = new URLSearchParams();

  var requestOptions: any = {
    method: "DELETE",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch(`http://localhost:4000/users/${id}`, requestOptions)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

const columns: ColumnsType<IUser> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "User Name",
    key: "userName",
    dataIndex: "userName",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (roles: string) => (
      <Tag color={roles == "admin" ? "blue" : "green"}>
        {roles.toUpperCase()}
      </Tag>
    ),
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Invite {record.title}</a> */}
        <a onClick={() => deleteUser(_.id)}>Delete</a>
      </Space>
    ),
  },
];
function UsersList() {
  const [usersList, setUsersList] = useState<IUser[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/users/")
      .then((response) => response.json())
      .then((json) => setUsersList(json.data));
  }, []);
  if (usersList.length != 0) {
    return (
      <div style={{ width: "80vw", margin: "0% 2%" }}>
        <div className="users-list-title">
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
          className="users-list-table"
          columns={columns}
          dataSource={usersList}
        />
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default UsersList;
