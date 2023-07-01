import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

function PostNews() {
  const [title, setTitle] = useState("");
  const [titleDescription, setTitleDescription] = useState("");
  const [newsDescription, setNewsDescription] = useState("");
  const [tag, setTag] = useState("");
  const [hashTag, setHashTag] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);
  const [fileList, setFileList] = useState(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
  };

  const handlePost = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("titleDescription", titleDescription);
    formData.append("newsDescription", newsDescription);
    formData.append("author", author);
    formData.append("tag", tag);
    formData.append("hashTag", hashTag);
    formData.append("categoryId", category);
    formData.append("picture", selectedFile as any);
    // let image = document.getElementById("fileInput");
    // for (let i = 0; i < fileList.length; i++) {}
    fetch("http://localhost:4000/api/news", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    // for (let i = 0; i < normFile.length; i++) {

    // }
  };
  return (
    <div style={{ marginLeft: "10vw", marginTop: "8vh", width: "40vw" }}>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        // layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Title">
          <Input onChange={(e) => setTitle(e.target.value)} />
        </Form.Item>
        <Form.Item label="Title Description">
          <Input onChange={(e) => setTitleDescription(e.target.value)} />
        </Form.Item>
        <Form.Item label="News Description">
          <TextArea
            rows={4}
            onChange={(e) => setNewsDescription(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Tag">
          <Input onChange={(e) => setTag(e.target.value)} />
        </Form.Item>
        <Form.Item label="Hash-Tag">
          <Input onChange={(e) => setHashTag(e.target.value)} />
        </Form.Item>
        <Form.Item label="Category">
          <Select onSelect={(e) => setCategory(e)}>
            <Select.Option value="1">Sport</Select.Option>
            <Select.Option value="2">Technology</Select.Option>
            <Select.Option value="3">Fashion</Select.Option>
            <Select.Option value="4">politics</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Author">
          <Input onChange={(e) => setAuthor(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          // getValueFromEvent={normFile}
        >
          <input type="file" onChange={handleFileInput} />
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
  );
}
export default PostNews;
