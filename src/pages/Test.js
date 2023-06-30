import { useState } from "react";
import { Tab, Col, Nav, Form } from "react-bootstrap";

export default function App() {
  const [currentTab, setCurrentTab] = useState("first");

  const handleSelect = (eventKey) => {
    setCurrentTab("second");
  };

  return (
    <Tab.Container
      defaultActiveKey="first"
      activeKey={currentTab}
      onSelect={(key) => setCurrentTab(key)}
    >
      <Col
        md={3}
        style={{
          border: "1px solid #084A83",
          background: "white",
          height: "150px"
        }}
      >
        <Nav variant="pills" className="flex-column" align="left">
          <Nav.Item>
            <Nav.Link eventKey="first">Se connecter</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Se créer un compte</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Plus d'informations</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col
        className="account-col"
        md={{ span: 7, offset: 1 }}
        style={{ border: "1px solid #084A83", background: "white" }}
      >
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <Form.Group className="mb-3" controlId="formBasicName">
              <a
                onClick={handleSelect}
                className="btn btn-primary"
                style={{
                  background: "transparent",
                  border: "1px solid #084A83",
                  borderRadius: "0px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  textAlign: "center",
                  color: "black"
                }}
              >
                Se créer un compte
              </a>
            </Form.Group>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <p>Second</p>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Tab.Container>
  );
}
