import { Button, Card, Col, Flex, Form, Input, Radio, Row, Space } from "antd";
import React, { useEffect, useState } from "react";

const APP_TYPE = {
  resume: "resume",
  new: "new",
};

export default function SignUpPage(props) {
  const { gotoNextPage } = props;
  const [application, setApplication] = useState(APP_TYPE.new);
  const form = Form.useForm();
  const values = Form.useWatch([], form);
  //   const [formData,setFormData] = useState({
  //     application: APP_TYPE.new,
  //     application_id: ""
  //   })

  //   const _validations = () => {

  //   }

  useEffect(() => {
    console.log(form, values);
  }, [form]);

  const onClickNextHandle = (data) => {
    console.log("dataaa", data);
    gotoNextPage();
  };

  return (
    <Row>
      <Col
        xs={24}
        md={{
          span: 12,
          offset: 6,
        }}
      >
        <Form
          initialValues={{
            application: APP_TYPE.new,
          }}
          onFinish={onClickNextHandle}
          className="signup-form card-bg"
        >
          <Form.Item name="application">
            <Radio.Group onChange={(e) => setApplication(e.target.value)}>
              <Space direction="vertical">
                <Radio value={APP_TYPE.new}> New Application </Radio>
                <Radio value={APP_TYPE.resume}>
                  {" "}
                  Resume An Existing Application{" "}
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          {application == APP_TYPE.resume && (
            <Form.Item
              label="Application Id"
              name="application_id"
              rules={[
                {
                  required: application == APP_TYPE.resume,
                  message: "Application Id is Required!!",
                },
              ]}
            >
              <Input
                placeholder="xxxxxx"
                disabled={application == APP_TYPE.new}
              />
            </Form.Item>
          )}
          <Flex justify="center" align="center" gap={6}>
            <Button htmlType="submit" type="primary">
              Next
            </Button>
          </Flex>
        </Form>
      </Col>
    </Row>
  );
}
