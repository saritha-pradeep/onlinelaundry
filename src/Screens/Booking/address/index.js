import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Label,
  Input,
  FormGroup,
  Button,
} from "reactstrap";
import "./address.css"; // Create this CSS file for styling
import OrderSummary from "./ordersummary";

const Address = () => {
  return (
    <Container className="row-card">
      <Row>
        <Col md="6">
          <Card>
            <CardBody>
              <Container className="address-form">
                <h3>Address</h3>
                <hr className="divider" />
                <FormGroup>
                  <Label for="postcode">Postcode</Label>
                  <Input type="text" id="postcode" />
                </FormGroup>

                <FormGroup>
                  <Label for="addressLine1">Address Line 1</Label>
                  <Input type="text" id="addressLine1" />
                </FormGroup>

                <FormGroup>
                  <Label for="addressLine2">Address Line 2</Label>
                  <Input type="text" id="addressLine2" />
                </FormGroup>

                <Row className="button-row">
                  <Col xs="6">
                    <Button color="secondary" className="button">
                      Previous
                    </Button>
                  </Col>
                  <Col xs="6">
                    <Button color="primary" className="button">
                      Next
                    </Button>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardBody>
              <OrderSummary />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Address;