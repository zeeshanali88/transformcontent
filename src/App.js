import "./App.css";
import { useContext, useState } from "react";
import {
  Row,
  Container,
  Col,
  Table,
} from "reactstrap";
import Jsonpicker from "./components/jsontaker";
import Contents from "./components/contents";
import * as actions from './store/actions';
import { Context } from "./store";

function App() {
  const [state, dispatch] = useContext(Context);

  const onProceed = (value) => {
    dispatch(actions.onTransform(state.content, value));
  }

  console.log(state.transformation);

  return (
    <div className="App">
      <Container className="mt-5">
        <Row>
          <Col md="8">
            <Contents />
          </Col>
          <Col md="4">
            <Jsonpicker onProceed={onProceed} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
