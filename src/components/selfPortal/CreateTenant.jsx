import { Button, Col, Flex, Form, Input, InputNumber, Row, Select, Typography } from "antd";
import React from "react";
import PhoneNumber from "./PhoneNumber";

const { Title } = Typography;

export default function CreateTenant(props) {
    const { gotoNextPage, gotoPreviousPage } = props;
  return (
    <Form
      // initialValues={{
      //   product: PRODUCTS.contact_center,
      // }}
      // onFinish={onClickNextHandle}
      layout="vertical"
      className="information-form card-bg"
    >
      <Title level={4}>Account Support Contact Info</Title>
      <Row gutter={[15, 0]}>
        <Col xs={24} sm={12}>
          <Form.Item name="product" label="Name">
            <Input placeholder="sachin" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="product" label="Email ID">
            <Input placeholder="sachin@gmail.com" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="product" label="Phone Number">
            <PhoneNumber />
          </Form.Item>
        </Col>
      </Row>



      <Title level={4}>Licensed To Info</Title>
      <Row gutter={[15, 0]}>
        <Col xs={24} sm={12}>
          <Form.Item name="first_name" label="First Name">
            <Input placeholder="sachin" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="last_name" label="Last Name">
            <Input placeholder="sachin" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="email" label="Email ID">
            <Input placeholder="sachin@gmail.com" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="mobile_no" label="Phone Number">
            <PhoneNumber />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="company_name" label="Organization">
            <Input placeholder="organization" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="country" label="Country">
            <Select placeholder="organization" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="address1" label="Address line 1">
            <Input placeholder="Address line 1" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="address2" label="Address line 2">
            <Input placeholder="Address line 2" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="address3" label="Address line 3">
            <Input placeholder="Address line 3" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="city" label="City">
            <Input placeholder="City" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="code" label="Postal Code">
            <InputNumber style={{width: "100%"}} controls={false} maxLength={6} placeholder="000000" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="state" label="State / Province">
            <Select placeholder="State" />
          </Form.Item>
        </Col>
      </Row>


      <Title level={4}>Billing To Info</Title>
      <Row gutter={[15, 0]}>
        <Col xs={24} sm={12}>
          <Form.Item name="first_name" label="First Name">
            <Input placeholder="sachin" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="last_name" label="Last Name">
            <Input placeholder="sachin" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="email" label="Email ID">
            <Input placeholder="sachin@gmail.com" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="mobile_no" label="Phone Number">
            <PhoneNumber />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="company_name" label="Organization">
            <Input placeholder="organization" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="country" label="Country">
            <Select placeholder="organization" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="address1" label="Address line 1">
            <Input placeholder="Address line 1" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="address2" label="Address line 2">
            <Input placeholder="Address line 2" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="address3" label="Address line 3">
            <Input placeholder="Address line 3" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="city" label="City">
            <Input placeholder="City" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="code" label="Postal Code">
            <InputNumber style={{width: "100%"}} controls={false} maxLength={6} placeholder="000000" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item name="state" label="State / Province">
            <Select placeholder="State" />
          </Form.Item>
        </Col>
      </Row>


      <Flex justify="flex-end" align="center" gap={6}>
        <Button onClick={gotoPreviousPage} type="primary">
          Cancel
        </Button>
        <Button onClick={gotoNextPage} type="primary">
          Save & Next
        </Button>
      </Flex>
    </Form>
  );
}
