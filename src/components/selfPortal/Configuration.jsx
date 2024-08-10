import {
  Button,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Typography,
} from "antd";
import React, { useState } from "react";

const { Title } = Typography;

const COUNTRIES_ALLOWED = {
  ALL: "all",
  NONE: "None",
  HOME: "Only Home Country",
  SPECIFIED_BELOW: "Specified Below",
};
const COUNTRIES_ALLOW_LIST = [
  {
    label: "All",
    value: COUNTRIES_ALLOWED.ALL,
  },
  {
    label: "None",
    value: COUNTRIES_ALLOWED.NONE,
  },
  {
    label: "Only Home Country",
    value: COUNTRIES_ALLOWED.HOME,
  },
  {
    label: "Specified Below",
    value: COUNTRIES_ALLOWED.SPECIFIED_BELOW,
  },
];

export default function Configuration(props) {
  const { gotoNextPage, gotoPreviousPage } = props;

  const [filter, setFilter] = useState(true);

  return (
    <Row>
      <Col
        xs={24}
        md={{
          span: 18,
          offset: 3,
        }}
      >
        <Form
          //   initialValues={{
          //     product: PRODUCTS.contact_center,
          //   }}
          //   onFinish={onClickNextHandle}
          className="signup-form card-bg"
        >
          <Title level={4}>Configuration Parameters</Title>
          <Form.Item label="Maxmum Users">
            <InputNumber min={1} />
          </Form.Item>
          <Checkbox checked={filter} onChange={() => setFilter(!filter)}>
            SMS Filter By Country
          </Checkbox>
          {filter && (
            <Form.Item style={{ flexDirection: 'column', alignItems: 'flex-start' }} label="List of Allowed Countries for SMS" name="product">
              <Radio.Group
                // onChange={(e) => setApplication(e.target.value)}
                buttonStyle="solid"
                //   optionType="button"
                options={COUNTRIES_ALLOW_LIST}
              >
                {/* <Radio.Button
                    className="select-product"
                    value={COUNTRIES_ALLOWED.ALL}
                  >
                    All
                  </Radio.Button>
                  <Radio.Button
                    className="select-product"
                    value={COUNTRIES_ALLOWED.NONE}
                  >
                    None
                  </Radio.Button>

                  <Radio.Button
                    className="select-product"
                    value={COUNTRIES_ALLOWED.HOME}
                  >
                    Only Home Country
                  </Radio.Button>

                  <Radio.Button
                    className="select-product"
                    value={COUNTRIES_ALLOWED.SPECIFIED_BELOW}
                  >
                    Specified Below
                  </Radio.Button> */}
              </Radio.Group>
            </Form.Item>
          )}
          <Flex justify="flex-end" align="center" gap={6}>
            <Button onClick={gotoPreviousPage} type="primary">
              Cancel
            </Button>
            <Button onClick={gotoNextPage} type="primary">
              Save & Next
            </Button>
          </Flex>
        </Form>
      </Col>
    </Row>
    // <div>Configuration {_buttonsContainer()}</div>
  );
}
