import React, { useState, useEffect } from "react";
import Editor from "../components/Editor/Editor";
import useLocalStorage from "../hooks/useLocalStorage";
import Accordion from "../common-components/Accordian/Accordian";
import { useSelector } from "react-redux";
import { getSolutions } from "../store/selectors/";
import { Modal, Button } from "react-bootstrap";

export default function EditorContainer({ item = {} }) {
  const getAllSolutions = useSelector(getSolutions);
  const [html, setHTML] = useLocalStorage("html", "");
  const [js, setJS] = useLocalStorage("js", "");
  const [css, setCSS] = useLocalStorage("css", "");
  const [srcDoc, setSrcDoc] = useState("");
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`<html><body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>`);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="editor-wrapper">
        <h4>{item?.questionTitle}</h4>
        <p>{item?.solutions?.length}</p>
        <div className="solutions">
          <div className="creator-panel">
            <div className="creator-info">
              <span>Alicia Johnson</span>
              <span>Created on 22nd Jan 2020 14:23</span>
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
      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <>
            <div className="pane top-pane">
              <Editor
                language="xml"
                displayName="html"
                value={html}
                onChange={setHTML}
              />
              <Editor
                language="css"
                displayName="css"
                value={css}
                onChange={setCSS}
              />
              <Editor
                language="javascript"
                displayName="javascript"
                value={js}
                onChange={setJS}
              />
            </div>
            <div className="editor-pane">
              <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
              />
            </div>
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
