import {
  Button,
  Col,
  Flex,
  Form,
  Grid,
  Radio,
  Row,
  Space,
  Typography,
} from "antd";
import React from "react";

const PRODUCTS = {
  contact_center: "Contact Center",
  conference: "Conferencing",
  streaming: "Realtime Streaming",
  calling: "Calling",
};

const { Title } = Typography;

export default function SelectProduct(props) {
  const { gotoNextPage } = props;

  const onClickNextHandle = () => {
    gotoNextPage();
  };

  return (
    <Row>
      <Col
        xs={24}
        md={{
          span: 16,
          offset: 4,
        }}
      >
        <Form
          initialValues={{
            product: PRODUCTS.contact_center,
          }}
          onFinish={onClickNextHandle}
          className="signup-form card-bg"
        >
          <Title level={4}>Select Product</Title>
          <Form.Item name="product">
            <Radio.Group
              // onChange={(e) => setApplication(e.target.value)}
              buttonStyle="solid"
            >
              <Row wrap gutter={[15, 7]} >
                <Col xs={24} md={12}>
                  <Radio.Button
                    className="select-product"
                    value={PRODUCTS.contact_center}
                  >
                    Contact Center
                  </Radio.Button>
                </Col>

                <Col xs={24} md={12}>
                  <Radio.Button
                    className="select-product"
                    value={PRODUCTS.conference}
                  >
                    Conferencing
                  </Radio.Button>
                </Col>

                <Col xs={24} md={12}>
                  <Radio.Button
                    className="select-product"
                    value={PRODUCTS.streaming}
                  >
                    Realtime Streaming
                  </Radio.Button>
                </Col>

                <Col xs={24} md={12}>
                  <Radio.Button
                    className="select-product"
                    value={PRODUCTS.calling}
                  >
                    Calling
                  </Radio.Button>
                </Col>
              </Row>
            </Radio.Group>
          </Form.Item>
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
