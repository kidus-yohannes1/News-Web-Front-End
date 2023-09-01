import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

function AddUser() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(password);

  const [role, setRole] = useState("");
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      string: "${label} is not a valid password!",
    },
    string: {
      range: "${label} must be atleast {min} characters",
    },
  };

  const handlePost = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImVtYWlsIjoiYm9uaUBnbWFpbC5jb20iLCJpYXQiOjE2ODcxNjE2NDQsImV4cCI6MTY4NzE2ODg0NH0.hSCeLcP6XuYIKmBaZyA19K0zMR4aiI4YJzfD09VWKQY"
    );
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", name);
    urlencoded.append("userName", userName);
    urlencoded.append("email", email);
    urlencoded.append("password", password);
    urlencoded.append("role", role);
    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:4000/users", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          window.location.href = `successfully?id=addUser`;
        }
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <div className="users-add-title">
        <h2>Add User</h2>
        <Button
          onClick={() => (window.location.href = "adduser")}
          type="primary"
          size={"middle"}
        >
          View users List
        </Button>
      </div>
      <br></br>
      <hr style={{ marginLeft: "3%", width: "100%" }}></hr>
      <div style={{ margin: "0 auto", width: "50%" }}>
        <br></br>
        <h3 style={{ color: "gray" }}>Create a new user to Hagere news</h3>
        <br></br>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          layout="vertical"
          style={{ maxWidth: 600, margin: "auto" }}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="Name"
            name={["user", "name"]}
            rules={[{ required: true }]}
          >
            <Input onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="User Name"
            name={["user", "username"]}
            rules={[{ required: true }]}
          >
            <Input onChange={(e) => setUserName(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Email"
            name={["user", "email"]}
            rules={[{ required: true, type: "email" }]}
          >
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, type: "string", min: 8 }]}
            hasFeedback
          >
            <Input.Password onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: "Please select gender!" }]}
          >
            <Select
              onSelect={(e) => setRole(e)}
              placeholder={"choose the role"}
            >
              <Select.Option value="admin">Admin</Select.Option>
              <Select.Option value="author">Author</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item style={{ justifyContent: "flex-end" }}>
            <Button
              onClick={handlePost}
              // style={{ width: "100%", marginLeft: "50%" }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Post
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default AddUser;
