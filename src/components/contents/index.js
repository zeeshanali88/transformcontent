import React, { useContext } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import { Context } from "../../store";

const Contents = () => {
    const [state, dispatch] = useContext(Context);

    return (
        <Container>
          <Row>
            <Col md="auto">
              <h6>Counte: {state.content.length}</h6>
            </Col>
          </Row>
          <Row>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>KEY</th>
                </tr>
              </thead>
              <tbody>
                {state.content.map((value, index) => (
                  <tr key={index}>
                    <td>id</td>
                    <td>{value.id}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Container>
    );
};

export default Contents;
