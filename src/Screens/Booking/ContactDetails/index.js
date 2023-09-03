import { Col, Container, Form, Input, Row } from "reactstrap";
import { useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { alterReducer } from "../reducer";
import OrderSummary from "../ordersummary";
import { toastController } from "../../../Components/ToastWidget";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../Firebase/config";
import { useNavigate } from "react-router-dom";

export default function ContactDetails({ show = false }) {
  const [_data, setData] = useState({});
  const state = useSelector((state) => state);
  const sections = state.bookingReducer.sections.map((e) => ({
    ...e,
    active: false,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInput = (event, key) => {
    const value = event.target.value;
    setData((e) => ({ ...e, [key]: value }));
  };
  const handleOnSubmit = () => {
    dispatch(
      alterReducer({
        currentIndex: 0,
        sections,
        contactDetails: _data,
        isLoading: true,
      })
    );
    const payload = {
      userId: "",
      orderCreatedOn: new Date(),
      OrderStatus: "pending",
      orderedItems: state.bookingReducer.cart,
      userTimeSlots: state.bookingReducer.deliveryDetails,
      deliveryDetails: {},
      contactInfo: state.bookingReducer.contactDetails,
      shopInfo: state.bookingReducer.selectedShopDetails,
    };
    addDoc(collection(db, "Orders"), payload)
      .then((e) => {
        toastController.success("Order placed successfully");
        dispatch(
          alterReducer({
            isLoading: false,
            cart: [],
            contactDetails: {},
            deliveryDetails: {},
            selectedShopDetails: {},
            totalPrice:0
          })
        );
        navigate("/");
      })
      .catch((e) => {
        toastController.error("Ooops....An error occured");
        dispatch(alterReducer({ isLoading: false }));
      });
  };
  const showNextButton = Boolean(
    _data.first_name &&
      _data.second_name &&
      _data.email &&
      _data.phone_number &&
      _data.cardnumber &&
      _data.expiry_Date &&
      _data.cvv
  );

  return (
    <Container fluid style={{ paddingTop: 20 }}>
      <h4>Contact Details</h4>
      <Row className="contact-view-wrapper">
        <Col sm={6}>
          <Form onSubmit={() => {}}>
            <Row style={{ marginTop: 20 }}>
              <Col>
                <Input
                  type="text"
                  placeholder="First Name"
                  className="contact-view-inputs"
                  onChange={(e) => handleInput(e, "first_name")}
                  required
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  placeholder="Second Name"
                  className="contact-view-inputs"
                  onChange={(e) => handleInput(e, "second_name")}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Col>
                <Input
                  type="email"
                  placeholder="email"
                  className="contact-view-inputs"
                  onChange={(e) => handleInput(e, "email")}
                  required
                />
              </Col>
              <Col>
                <Input
                  type="phone"
                  className="contact-view-inputs"
                  placeholder="Phone number"
                  onChange={(e) => handleInput(e, "phone_number")}
                />
              </Col>
            </Row>
            <h4 style={{ marginTop: 20 }}>Card Details</h4>
            <Row style={{ marginTop: 20 }}>
              <Col sm={8}>
                <Input
                  type="card"
                  className="contact-view-inputs"
                  placeholder="enter your 16 card number"
                  onChange={(e) => handleInput(e, "cardnumber")}
                  required
                />
              </Col>
              <Col sm={2}>
                <Input
                  type="phone"
                  className="contact-view-inputs"
                  placeholder="Expiry Date"
                  required
                  onChange={(e) => handleInput(e, "expiry_Date")}
                />
              </Col>
              <Col sm={2}>
                <Input
                  placeholder="Cvv"
                  className="contact-view-inputs"
                  required
                  onChange={(e) => handleInput(e, "cvv")}
                />
              </Col>
            </Row>
          </Form>
        </Col>
        <Col sm={6}>
          <OrderSummary
            showNext={showNextButton}
            nextButtonPlaceholder="Place Order"
            onNextButtonClick={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
}
