import React from "react";
import Address from "./address";
import BookingHeader from "./BookingHeader";
import LaundryItems from "./LaundryItems";
import CollectionAndDelivery from "./Collection";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { alterReducer } from "./reducer";
import ContactDetails from "./ContactDetails";
import { Col, Container, Row, Spinner } from "reactstrap";
function Booking(params) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentIndex = state.bookingReducer.currentIndex;
  const isLoading = state.bookingReducer.isLoading;
  const compArray = [
    Address,
    LaundryItems,
    CollectionAndDelivery,
    ContactDetails,
  ];
  const handleNextButtonClick = (index) => {
    if (index < compArray.length) {
      dispatch(
        alterReducer({
          currentIndex: index + 1,
          sections: state.bookingReducer.sections.map((e, i) => {
            if (i === index) {
              return { ...e, active: true };
            }
            return e;
          }),
        })
      );
    }
  };
  const handlePrevButtonClick = (index) => {
    if (index !== 0) {
      dispatch(alterReducer({ currentIndex: index - 1 }));
    }
  };
  return (
    <Container fluid>
      <BookingHeader />
      {isLoading ? (
        <div className="loader-style-booking">
          <Spinner children={false} className="spinner-style-booking" />
        </div>
      ) : null}
      {compArray.map((Comp, index) => {
        if (!isLoading)
          return (
            <div
              className={`slide-card ${
                currentIndex === index ? "visible" : ""
              }`}
            >
              <Comp
                onNextButtonClick={() => handleNextButtonClick(index)}
                onPrevButtonClick={() => handlePrevButtonClick(index)}
              />
            </div>
          );
        else return null;
      })}
    </Container>
  );
}
export default Booking;
