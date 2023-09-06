import React from "react";
import "./styles.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import {BiArrowBack} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function BookingHeader(params) {
  const navigate = useNavigate()
  const state = useSelector((state) => state);
  const Sections = state.bookingReducer.sections;

  return (
    <Container fluid className="p-0 bh-main-container">
      <Row sm={12} className="align-items-center">
        <Col sm={4}>
          {/* <img height='100' width='100' className="bk-logo" src='https://img.freepik.com/free-vector/laundry-logo-with-text-space-your-slogan_1447-1423.jpg?w=2000'/> */}
          <BiArrowBack style={{height:80}} onClick={()=>{
            navigate('/')
          }}/>
        </Col>
        <Col sm="8">
          <Row>
            {Sections.map((item, index) => (
              <Col key={index}>
                <AiOutlineCheckCircle
                  color={item.active ? "green" : "grey"}
                  className="booking-h-icon-style"
                />
                {item.tabname}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default BookingHeader;
