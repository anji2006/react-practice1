import { Col, Flex, Progress, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import SignUpPage from "./SingUpPage";
import SelectProduct from "./SelectProduct";
import YourInformation from "./YourInformation";
import Configuration from "./Configuration";
import Services from "./Services";
import Greeting from "./Greeting";
import CreateTenant from "./CreateTenant";

export default function SelfPortal() {
  const [pageNumber, setPageNumber] = useState(0);

  const gotoNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const moveToHomePage = () => {
    setPageNumber(0);
  };

  const gotoPreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const _renderContentPage = () => {
    switch (pageNumber) {
      case 0:
        return <SignUpPage gotoNextPage={gotoNextPage} />;
      case 1:
        return <SelectProduct gotoNextPage={gotoNextPage} />;
      case 2:
        return (
          <YourInformation
            gotoNextPage={gotoNextPage}
            gotoPreviousPage={gotoPreviousPage}
          />
        );
      case 3:
        return (
          <Configuration
            gotoNextPage={gotoNextPage}
            gotoPreviousPage={gotoPreviousPage}
          />
        );
      case 4:
        return (
          <Services
            gotoNextPage={gotoNextPage}
            gotoPreviousPage={gotoPreviousPage}
          />
        );
      case 5:
        return (
          <CreateTenant
            gotoNextPage={gotoNextPage}
            gotoPreviousPage={gotoPreviousPage}
          />
        );
      //   case 6:
      //     return <PaymentInfoPage gotoNextPage={gotoNextPage} />;
      default:
        return <Greeting moveToHomePage={moveToHomePage} />;
    }
  };

  return (
    <Row style={{padding: "10px 20px"}}>
      <Col
        xs={24}
        md={{
          span: 20,
          offset: 2,
        }}
        lg={{
          span: 16,
          offset: 4,
        }}
      >
        <Row>
          <Col span={24}>
            <Progress
              percent={pageNumber * 20}
              percentPosition={{
                align: "center",
                type: "inner",
              }}
              size={["100%", 15]}
            />
          </Col>
          <Col span={24} >
            {_renderContentPage()}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
