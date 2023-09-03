import { Button, Col, Container, Row } from "reactstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useCallback, useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { alterReducer, changeSection, updateCart } from "../reducer";
import moment from "moment/moment";
import OrderSummary from "../ordersummary";

const DateArray = () => {
  const _array = [];
  var curr = new Date(); // get current date
  var first = curr.getDate() - curr.getDay();
  for (var i = 0; i < 7; i++) {
    var next = new Date(curr.getTime());
    next.setDate(first + i);
    _array.push(moment(next).format("MMMM Do YYYY"));
  }
  return _array;
};
const timeArray = [
  "07.00 - 10.00",
  "11.00 - 13.00",
  "13.00 - 15.00",
  "15.00 - 18.00",
  "18.00 - 21.00",
  "21.00 - 22.00",
];
export default function CollectionAndDelivery({
  onNextButtonClick = () => {},
  onPrevButtonClick = () => {},
}) {
  const [_data, setData] = useState({});
  const dispatch = useDispatch();

  const ViewStack = ({
    collectionType,
    selectedDate = null,
    selectedTime = null,
    onDateSelect = () => {},
    onTimeSelect = () => {},
  }) => {
    return (
      <Row>
        <Col style={{ fontWeight: "bold" }}>
          {collectionType}
          <Col>
            <div className="cad-viewstack-line" />
          </Col>
          <Row style={{ marginTop: 10 }}>
            <Col md="4">
              <img
                src="https://www.love2laundry.com/assets/images/front/collection.svg"
                width={200}
              />
            </Col>
            <Col md="4">
              <DropViewer
                data={DateArray()}
                placeholder="Select Date"
                currentValue={selectedDate}
                onItemSelect={onDateSelect}
              />
            </Col>
            <Col md="4">
              <DropViewer
                data={timeArray}
                placeholder="Select Time Slot"
                currentValue={selectedTime}
                onItemSelect={onTimeSelect}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };
  return (
    <Container fluid>
      <Row className="collection-view-wrapper">
        <Col sm="6">
          <Col className="collection-stacker-wrapper">
            <ViewStack
              collectionType={"Collection Time"}
              selectedDate={_data.collection_date}
              selectedTime={_data.collection_time}
              onDateSelect={(_d) =>
                setData((e) => ({ ...e, collection_date: _d }))
              }
              onTimeSelect={(_d) =>
                setData((e) => ({ ...e, collection_time: _d }))
              }
            />
          </Col>
          <Col className="collection-stacker-wrapper">
            <ViewStack
              selectedDate={_data.delivery_date}
              selectedTime={_data.delivery_time}
              collectionType={"Delivery Time"}
              onDateSelect={(_d) =>
                setData((e) => ({ ...e, delivery_date: _d }))
              }
              onTimeSelect={(_d) =>
                setData((e) => ({ ...e, delivery_time: _d }))
              }
            />
          </Col>
        </Col>
        <Col>
          <OrderSummary
            showNext={Boolean(
              _data.collection_date &&
                _data.collection_time &&
                _data.delivery_date &&
                _data.delivery_time
            )}
            onPrevButtonClick={onPrevButtonClick}
            onNextButtonClick={() => {
              dispatch(
                alterReducer({ currentIndex: 3, deliveryDetails: _data })
              );
              onNextButtonClick();
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

const DropViewer = ({
  data = [],
  placeholder,
  onItemSelect = () => {},
  currentValue = null,
}) => {
  const [selected_date, setSelectedDate] = useState(placeholder);
  const handleItemClick = useCallback(
    (item) => {
      setSelectedDate(item);
      onItemSelect(item);
    },
    [onItemSelect]
  );
  return (
    <Container style={{ marginTop: 15 }}>
      <Row>
        <Col>
          <Dropdown>
            <Dropdown.Toggle>{currentValue ?? selected_date}</Dropdown.Toggle>
            <Dropdown.Menu>
              {data.map((item, index) => {
                return (
                  <Dropdown.Item
                    key={index}
                    style={
                      item === selected_date ? { backgroundColor: "blue" } : {}
                    }
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};
