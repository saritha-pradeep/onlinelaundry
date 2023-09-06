import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import "./styles.css"; // Create this CSS file for styling
import OrderSummary from "../ordersummary";
import MapComponent from "./Map";
import { getSingleDocument } from "../../../Firebase/functions";
import { db } from "../../../Firebase/config";
import { collection, query } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { alterReducer, changeSection } from "../reducer";
import { toastController } from "../../../Components/ToastWidget";
const Address = ({ onNextButtonClick = () => {} }) => {
  const [selectedShop, setSelectShop] = useState({});
  const dispatch = useDispatch();

  const getAllshops = useCallback(async () => {
    const _q = query(collection(db, "shops"));
    const shopList = await getSingleDocument({ query: _q });
    dispatch(alterReducer({ shopList }));
  }, [dispatch]);
  useEffect(() => {
    getAllshops();
  }, [getAllshops]);
  return (
    <Container className="row-card">
      <Row>
        <Col md="6">
          <Card>
            <CardBody>
              <Container className="address-form">
                <h3>Address</h3>
                <h4>Find your nearby laundry shops</h4>
                <hr className="divider" />
                <MapComponent
                  onShopChange={(e) =>{
                    toastController.info(`You have selected ${e.name} shop, ${e.postcode}  `)
                     setSelectShop({ name: e })
                    }}
                />
              </Container>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardBody>
              <OrderSummary
                showPrev={false}
                showNext={Boolean(selectedShop?.name)}
                onNextButtonClick={()=>{
                  dispatch(alterReducer({selectedShopDetails:selectedShop}))
                  onNextButtonClick()}}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Address;
