import React, { useState } from "react";
import Accordion from "../common-components/Accordian/Accordian";
import { Modal, Button } from "react-bootstrap";
import EditorComponent from "../components/JSEditor/JSEditorParentComponent";

export default function EditorContainer({ selectedItem = {} }) {
  const getAllSolutions = [];

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      {selectedItem?.solutions?.map((item) => (
        <div className="editor-wrapper">
          <h4>{item?.questionTitle}</h4>
          <p>{item?.solutions?.length}</p>
          <div className="solutions">
            <div className="creator-panel">
              <div className="creator-info">
                <span>{item.creator}</span>
                <span>{item.date}</span>
              </div>
              <div className="share-icons">
                <Button variant="primary" onClick={handleShow}>
                  Launch demo modal
                </Button>
              </div>
            </div>
            <div className="accordion">
              {getAllSolutions?.[0]?.solutions?.map(({ title, content }, i) => (
                <Accordion title={`Solution ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      ))}
      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <>
            <EditorComponent />
          </>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
