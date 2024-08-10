import {
  Button,
  Col,
  Flex,
  Form,
  Input,
  Radio,
  Row,
  Typography,
  Upload,
} from "antd";
import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import PhoneNumber from "./PhoneNumber";

const { Title } = Typography;

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

export default function YourInformation(props) {
  const { gotoNextPage, gotoPreviousPage } = props;
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const _buttonsContainer = () => {
    return (
      <Flex justify="flex-end" align="center" gap={6}>
        <Button onClick={gotoPreviousPage} type="primary">
          Cancel
        </Button>
        <Button onClick={gotoNextPage} type="primary">
          Save & Next
        </Button>
      </Flex>
    );
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
    <Form
      // initialValues={{
      //   product: PRODUCTS.contact_center,
      // }}
      // onFinish={onClickNextHandle}
      layout="vertical"
      className="information-form card-bg"
    >
      <Title level={4}>Basic Info</Title>
      <Form.Item name="product">
        <Row gutter={[15, 0]}>
          <Col xs={24} >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              //   action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </Col>
        </Row>

        <Row wrap gutter={[25, 0]}>
          <Col xs={24} md={12}>
            <Form.Item label="Organization Name">
              <Input placeholder="Organization Name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Organization Alias">
              <Input placeholder="Organization Alias" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item label="Domain Name Prefix">
              <Input addonAfter={`.${window.location.hostname}`} />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item label="Allowed List of Suffixes (Comma separated values)">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Title level={4}>Tenant Admin User</Title>
      <Row wrap gutter={[25, 0]}>
        <Col xs={24} md={12}>
          <Form.Item
            label="Tenant Admin User"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input placeholder="example@gmail.com" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="Tenant Admin Password">
            <Input.Password placeholder="P@ssw0rd*" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item label="First Name">
            <Input placeholder="First name" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item label="Last Name">
            <Input placeholder="Last name" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label="Communication Email (Note:This can be the same as Tenant Admin User)"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input placeholder="example@gmail.com" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item label="Phone Number">
            <PhoneNumber />
          </Form.Item>
        </Col>
      </Row>
      {_buttonsContainer()}
    </Form>
  );
}
