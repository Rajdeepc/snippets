import React, { useState } from "react";
import { Modal, Input, Button, Dropdown } from "react-bootstrap";
import EditorComponent from "../Editor/EditorComponent";

export default function CreateCollection({ show, hideModal }) {
  const [snippetTitle, setSnippetTitle] = useState("");
  const [snippetDescription, setSnippetTitleDesc] = useState("");

  return (
    <>
      <div className="collection-wrapper">
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Collection
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <h1>Create Snippet</h1>
        <div>
          <input
            value={snippetTitle}
            placeholder="Type your snippet title"
            onChange={(e) => setSnippetTitle(e.target.value)}
          />
        </div>
        <div>
          {" "}
          <input
            value={snippetDescription}
            placeholder="Type your snippet Description"
            onChange={(e) => setSnippetTitleDesc(e.target.value)}
          />
        </div>
        <div>
          <EditorComponent />
        </div>
      </div>
    </>
  );
}
