import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Dropdown } from "react-bootstrap";
import EditorComponent from "../JSEditor/JSEditorParentComponent";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addTask } from "../../redux/actions/getQuestions.action"

export default function CreateCollectionModal({ onClose, selectedChannel }) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      channelId: selectedChannel,
      taskTitle: title,
      taskDetails: value,
      solutions:[]
    }
    dispatch(addTask(body));
  };
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <>
      <div className="collection-wrapper">
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="taskTitle">
            <Form.Label>Task Title</Form.Label>
            <Form.Control type="text" placeholder="Title" onChange={handleTitleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="taskDetails">
            {/* <EditorComponent /> */}
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </Form.Group>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
