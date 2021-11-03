import React, { useContext, useState } from "react";
import { Context } from '../../store';
import { Container, Card, CardBody, Row, Col, Input, Button } from "reactstrap";

const Jsonpicker = (props) => {
  const [value, setValue] = useState("");
  const [state, dispatch] = useContext(Context);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode == 9) {
      e.preventDefault();
      setValue(e.target.value + "\t");
    }
  };

  const onProceed = () => {
    if (props.onProceed) {
      props.onProceed(JSON.parse(value));
    }
  };

  return (
    <Container>
      <Row>
        <Card>
          <CardBody className="p-4">
            <Row>
              <Col md="auto">
                <h6>Enter Json Here</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  type="textarea"
                  rows={15}
                  value={value}
                  onKeyDown={onKeyDown}
                  onChange={onChange}
                />
              </Col>
            </Row>
            <Row>
              <Col md="12" className="text-end">
                <Button onClick={() => onProceed()} className="mt-2">
                  Proceed
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Row>
      <Row>
        <Input
          type="textarea"
          rows={4}
          value={JSON.stringify(state.transformation)}
        />
      </Row>
    </Container>
  );
};

export default Jsonpicker;
