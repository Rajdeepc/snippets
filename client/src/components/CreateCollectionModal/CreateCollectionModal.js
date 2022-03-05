import React, { useState } from "react";
import { Form, Input, Button, Dropdown } from "react-bootstrap";
import EditorComponent from "../JSEditor/JSEditorParentComponent";

export default function CreateCollectionModal({ onClose, allChannels }) {
  const handleChannel = () => {};

  return (
    <>
      <div className="collection-wrapper">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Select Channel</Form.Label>
            <Form.Select aria-label="Default select example">
            {allChannels.map((channel) => (
                <option value={channel.channelName}>
                  {channel.channelName}
                </option>
              ))}
            </Form.Select>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="Title">
            <Form.Label>Snippet Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Description">
            <Form.Label>Snippet Description</Form.Label>
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <EditorComponent />
          </Form.Group>
          <Button variant="secondary" onClick={onClose}>Close</Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
