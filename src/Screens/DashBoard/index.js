import { Col, Container, Row } from "reactstrap";
import "./styles.css";
import Header from "../../Components/Header";
import { useEffect, useState } from "react";
import { getSingleDocument } from "../../Firebase/functions";
import { collection, query } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { useSelector } from "react-redux";

export default function DahsBoard() {
  const [orders, setOrders] = useState([]);
  const state = useSelector((state) => state);
  const id = state.loginReducer.user.id;
  const handleGetOrders = async () => {
    const _q = query(collection(db, "Orders"));
    const myOrders = await getSingleDocument({ query: _q });
    console.log(myOrders);
    setOrders(myOrders.filter((e) => e.userId === id));
  };
  useEffect(() => {
    handleGetOrders();
  }, [handleGetOrders]);
  const pending = orders.filter((e) => e.OrderStatus === "pending");
  const cancelled = orders.filter((e) => e.OrderStatus === "cancelled");
  const processed = orders.filter((e) => e.OrderStatus === "processed");
  const completed = orders.filter((e) => e.OrderStatus === "completed");
  const count = (_arr) => {
    return Array.isArray(_arr) ? _arr.length : 0;
  };
  return (
    <Container fluid className="p-0">
      <Header />
     
      <Row className="dash-outer-box-style">
        <Row className="dash-inner-box1-style">
          <Col sm="4" className="dash-box-styles">
            <img
              height={100}
              width={100}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1-4aKjDS8X8eqktvqlzRrB9nk69KHn1EEA&usqp=CAU"
            />
            <h3>PENDING ORDERS</h3>
            <h2 className="dash-order-count">{count(pending)}</h2>
          </Col>
          <Col sm="4" className="dash-box-styles">
            <img
              height={100}
              width={100}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBONaE_wipKddYosyFsfJZl5AAA_FrDrliQA&usqp=CAU"
            />
            <h3>PROCESSED ORDERS</h3>
            <h2 className="dash-order-count">{count(processed)}</h2>
          </Col>
        </Row>
        <Row className="dash-inner-box1-style">
          <Col sm="4" className="dash-box-styles">
            <img
              height={100}
              width={100}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFGIM--DyIzc5T36tMjqvl4k-j-7sqx9-1ag&usqp=CAU"
            />
            <h4>CANCELLED ORDERS</h4>
            <h2 className="dash-order-count">{count(cancelled)}</h2>
          </Col>
          <Col sm="4" className="dash-box-styles">
            <img
              height={100}
              width={100}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJhMO_9XiWGRtHFHS7nUXgOLmSvykTyJfsg&usqp=CAU"
            />

            <h3>COMPLETED ORDERS</h3>
            <h2 className="dash-order-count">{count(completed)}</h2>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
