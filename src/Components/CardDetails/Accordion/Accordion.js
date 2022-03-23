import React, { useState } from "react";
import { Card, Accordion } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

function CustomAccordion({ headerText, bodyText }) {
  const [isOpen, setIsOpen] = useState(false);
  function createMarkup() {
    return { __html: bodyText };
  }
  return (
    <Accordion defaultActiveKey="1">
      <Card onClick={() => setIsOpen(!isOpen)}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          {isOpen ? (
            <BiMinus size={30} color="rgb(11, 67, 118)" />
          ) : (
            <BsPlus size={30} color="rgb(11, 67, 118)" />
          )}
          {headerText}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <ul className="">
          {
            Array.isArray(bodyText)?
            bodyText.map((item) => (
              <li>{item}</li>             
            ))
            :
            <p dangerouslySetInnerHTML={createMarkup()}></p>
            
          }
          </ul>
          
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default CustomAccordion;
