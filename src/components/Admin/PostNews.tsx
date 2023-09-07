import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import { Category } from "../../hooks/newsHook";

function PostNews() {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [title, setTitle] = useState("");
  const [titleDescription, setTitleDescription] = useState("");
  const [newsDescription, setNewsDescription] = useState("");
  const [tag, setTag] = useState("");
  const [hashTag, setHashTag] = useState("");
  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [user, setUser] = useState(useContext(userContext));
  const [file, setFile] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/api/categories`)
      .then((response) => response.json())
      .then((json) => setCategoryList(json.data));
  }, []);

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
    setFile(
      event.target.files ? URL.createObjectURL(event.target.files[0]) : ""
    );
  };

  const handlePost = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("titleDescription", titleDescription);
    formData.append("newsDescription", newsDescription);
    formData.append("author", user.name);
    formData.append("tag", tag);
    formData.append("hashTag", hashTag);
    formData.append("categoryId", category);
    formData.append("userId", user.id.toString());
    formData.append("picture", selectedFile as any);
    fetch("http://localhost:4000/api/news", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="users-add-title">
        <h2>Post News</h2>
        <Button
          onClick={() => (window.location.href = "adduser")}
          type="primary"
          size={"middle"}
        >
          View news List
        </Button>
      </div>
      <br></br>
      <hr style={{ marginLeft: "3%", width: "100%" }}></hr>
      <div style={{ margin: "0 auto", width: "50%" }}>
        <br></br>
        <h3 style={{ color: "gray" }}>Create a new post to Hagere news </h3>
        <br></br>

        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          // layout="horizontal"
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="Title" name="Title" rules={[{ required: true }]}>
            <Input onChange={(e) => setTitle(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Title Description"
            name="Title Description"
            rules={[{ required: true }]}
          >
            <Input onChange={(e) => setTitleDescription(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="News Description"
            name="News Description"
            rules={[{ required: true }]}
          >
            <TextArea
              rows={4}
              onChange={(e) => setNewsDescription(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Tag" name="Tag" rules={[{ required: true }]}>
            <Input onChange={(e) => setTag(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Hash-Tag"
            name="Hash_Tag"
            rules={[{ required: true }]}
          >
            <Select onSelect={(e) => setHashTag(e)}>
              <Select.Option value="treanding">Treanding</Select.Option>
              <Select.Option value="topStories">Top Stories</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Category"
            name="Category"
            rules={[{ required: true }]}
          >
            <Select onSelect={(e) => setCategory(e)}>
              {categoryList.map((e: Category) => {
                return <Select.Option value={e.id}>{e.name}</Select.Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="Upload"
            name="Upload"
            rules={[{ required: true }]}
            valuePropName="fileList"
            // getValueFromEvent={normFile}
          >
            <input type="file" onChange={handleFileInput} />
            {file != "" ? (
              <img style={{ width: "100px", height: "80px" }} src={file}></img>
            ) : (
              <p></p>
            )}
          </Form.Item>
          <Form.Item style={{ justifyContent: "flex-end" }}>
            <Button
              onClick={handlePost}
              style={{ width: "100%", marginLeft: "50%" }}
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
export default PostNews;
