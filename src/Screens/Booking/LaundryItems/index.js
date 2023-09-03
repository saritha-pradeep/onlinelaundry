import { Button, Col, Container, List, ListGroup, Row } from "reactstrap";
import {
  getAllCategories,
  getAllLaundryItems,
} from "../../../Firebase/functions";
import { useEffect, useState } from "react";
import "./styles.css";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {  updateCart } from "../reducer";
export default function LaundryItems({
  onNextButtonClick = () => {},
  onPrevButtonClick = () => {},
}) {
  const [laundryItems, setLaundryItems] = useState([]);
  const state = useSelector((state) => state);
  const isLoggedIn = state.loginReducer.isLoggedIn;
  const [laundryCategories, setlaundryCategories] = useState([]);
  const cartedItems = laundryItems.filter((e) => e.itemCount > 0);
  const dispatch = useDispatch();
  const handleInitialLoad = async () => {
    const laundry = await getAllLaundryItems();
    const categories = await getAllCategories();
    setLaundryItems(laundry.map((e) => ({ ...e, itemCount: 0 })));
    setlaundryCategories(
      categories.map((e, i) => ({
        ...e,
        active: i === 0,
      }))
    );
  };
  useEffect(() => {
    handleInitialLoad();
  }, []);
  const handleCategory = (item) => {
    setlaundryCategories(
      laundryCategories.map((e) => ({
        ...e,
        active: e.id === item.id,
      }))
    );
  };
  const handleAddItem = (item, index) => {
    const _arr = [...laundryItems].map((elem, i) => {
      if (i === index) {
        return Object.assign({}, elem, { itemCount: item.itemCount + 1 });
      }
      return elem;
    });
    setLaundryItems(_arr);
  };
  const handleRemoveItem = (item, index) => {
    const _arr = [...laundryItems].map((elem, i) => {
      if (i === index && item.itemCount > 0) {
        return Object.assign({}, elem, { itemCount: item.itemCount - 1 });
      }
      return elem;
    });
    setLaundryItems(_arr);
  };
  const totalPrice =
    cartedItems.length > 0
      ? cartedItems
          .map((e) => Number(e.price * e.itemCount))
          .reduce((e, f) => e + f, 0)
          .toFixed(2)
      : Number(0).toFixed(2);
  const ItemCounterWrapper = ({ item, index, multiplier = false }) => {
    const _price = multiplier
      ? item.price > 0
        ? item.price * item.itemCount
        : item.price
      : item.price;
    return (
      <Row>
        <Col sm={8}>{item.name}</Col>
        <Col sm={4} className="laundry-price-calc-wrapper-view">
          <GrAddCircle
            onClick={() => handleAddItem(item, index)}
            style={{ marginRight: 10 }}
          />
          {item.itemCount}
          <GrSubtractCircle
            onClick={() => handleRemoveItem(item, index)}
            style={{ marginLeft: 10, marginRight: 10 }}
          />
          £{_price}
        </Col>
      </Row>
    );
  };
  return (
    <Container fluid>
      <Row className="laundry-item-wrapper">
        <Col sm={7}>
          <Row sm={6}>
            {laundryCategories.map((item, index) => {
              return (
                <Col
                  key={index}
                  className={
                    item.active
                      ? "laundryitems-category-style_active"
                      : "laundryitems-category-style"
                  }
                  onClick={() => handleCategory(item)}
                >
                  {item.name}
                  <img
                    src={item.image_url}
                    height={50}
                    width={50}
                    alt={index}
                  />
                </Col>
              );
            })}
          </Row>
          <Row className="laundry-items-list-style" sm={12}>
            {laundryItems.map((item, index) => {
              const needToShow =
                laundryCategories.filter((e) => e.active)[0].id ===
                item.category_id;
              if (needToShow)
                return (
                  <Col key={index} sm={12} className="laundry-items-item-style">
                    <Col>
                      <h5>{item.name}</h5>
                    </Col>
                    <Col>
                      <ItemCounterWrapper index={index} item={item} />
                    </Col>
                  </Col>
                );
              else return null;
            })}
          </Row>
        </Col>
        <Col sm={5}>
          <Col className="laundry-price-estimator">
            <Row>
              <Col sm={8}>
                <h4>Price estimator</h4>
              </Col>
              <Col sm={4}>
                <Button
                  className="laundry-price-reset-button"
                  onClick={() => {
                    setLaundryItems(
                      laundryItems.map((e) => ({ ...e, itemCount: 0 }))
                    );
                  }}
                >
                  reset
                </Button>
              </Col>
            </Row>
            <p style={{ marginTop: 10 }}>
              Use this calculator to get a rough total of your order. No need to
              list the actual items when you schedule a collection.
            </p>
            <div className="laundry-price-line" />
            <Row>
              {cartedItems.map((item, index) => {
                return (
                  <ItemCounterWrapper item={item} index={index} multiplier />
                );
              })}
            </Row>
            <Row style={{ marginTop: 30 }}>
              <Col sm="8">Estimate : </Col>
              <Col style={{ fontWeight: "bold" }}>£{totalPrice}</Col>
            </Row>
          </Col>

          {isLoggedIn&&<Row style={{ marginTop: 30 }}>
            <Col xs={cartedItems.length > 0 ? "6" : "12"}>
              <Button style={{ width: "100%" }} onClick={onPrevButtonClick}>
                Previous
              </Button>
            </Col>

            {cartedItems.length > 0 && (
              <Col xs="6">
                <Button
                  color="primary"
                  style={{ width: "100%" }}
                  onClick={() => {
                    dispatch(updateCart({ cart: cartedItems, totalPrice }));
                    onNextButtonClick();
                  }}
                >
                  Next
                </Button>
              </Col>
            )}
          </Row>}
        </Col>
      </Row>
    </Container>
  );
}
