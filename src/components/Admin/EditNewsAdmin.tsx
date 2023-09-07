import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { userContext } from "../../App";
import { Category } from "../../hooks/newsHook";

function EditNewsAdmin(props: any) {
  const location = useLocation();
  const propsData = location.state;
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<String>("a");

  const [title, setTitle] = useState(propsData.title);
  const [titleDescription, setTitleDescription] = useState(
    propsData.titleDescription
  );
  const [newsDescription, setNewsDescription] = useState(
    propsData.newsDescription
  );
  const [tag, setTag] = useState(propsData.tag);
  const [hashTag, setHashTag] = useState(propsData.hashTag);
  const [authorId, setAuthorId] = useState(propsData.userId);
  const [authorName, setAuthorName] = useState(propsData.author);
  const [category, setCategory] = useState(propsData.categoryId);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [file, setFile] = useState(propsData.picture);
  const [user, setUser] = useState(useContext(userContext));

  useEffect(() => {
    fetch(`http://localhost:4000/api/categories`)
      .then((response) => response.json())
      .then((json) => setCategoryList(json.data));
  }, []);

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setFile(
      event.target.files
        ? URL.createObjectURL(event.target.files[0])
        : propsData.picture
    );
    setSelectedFile(file);
  };

  const handlePost = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("titleDescription", titleDescription);
    formData.append("newsDescription", newsDescription);
    formData.append("author", authorName);
    formData.append("tag", tag);
    formData.append("hashTag", hashTag);
    formData.append("categoryId", category);
    formData.append("userId", authorId);
    if (selectedFile) {
      formData.append("picture", selectedFile as any);
    } else {
      formData.append("prevpicture", propsData.picture);
    }
    fetch(`http://localhost:4000/api/news/${propsData.id}`, {
      method: "PATCH",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          window.location.href = `/admin/successfully`;
        }
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <div className="users-add-title">
        <h2>Edit News</h2>
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
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item label="Title" name="Title" rules={[{ required: true }]}>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={title}
            />
          </Form.Item>
          <Form.Item
            label="Title Description"
            name="Title Description"
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e) => setTitleDescription(e.target.value)}
              defaultValue={titleDescription}
            />
          </Form.Item>
          <Form.Item
            label="News Description"
            name="News Description"
            rules={[{ required: true }]}
          >
            <TextArea
              rows={4}
              onChange={(e) => setNewsDescription(e.target.value)}
              defaultValue={propsData.newsDescription}
            />
          </Form.Item>
          <Form.Item label="Tag" name="Tag" rules={[{ required: true }]}>
            <Input
              onChange={(e) => setTag(e.target.value)}
              defaultValue={tag}
            />
          </Form.Item>
          <Form.Item
            label="Hash-Tag"
            name="Hash_Tag"
            rules={[{ required: true }]}
          >
            <Select onSelect={(e) => setHashTag(e)} defaultValue={hashTag}>
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
            <Select
              onSelect={(e) => setCategory(e)}
              placeholder={selectedCategory}
            >
              {categoryList.map((e: Category) => {
                if (propsData.categoryId == e.id && selectedCategory == "a") {
                  setSelectedCategory(e.name);
                }
                return <Select.Option value={e.id}>{e.name}</Select.Option>;
              })}

              {/* <Select.Option value="2">Technology</Select.Option>
              <Select.Option value="3">Fashion</Select.Option>
              <Select.Option value="4">politics</Select.Option> */}
            </Select>
          </Form.Item>
          {/* <Form.Item label="Author" name="Author" rules={[{ required: true }]}>
              <Input onChange={(e) => setAuthor(e.target.value)} />
            </Form.Item> */}
          <Form.Item
            label="Upload"
            name="Upload"
            rules={[{ required: true }]}
            valuePropName="fileList"
            // getValueFromEvent={normFile}
          >
            <input type="file" onChange={handleFileInput} />
            <img style={{ width: "100px", height: "80px" }} src={file}></img>
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
export default EditNewsAdmin;
