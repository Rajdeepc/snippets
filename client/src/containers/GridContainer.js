import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Channel from "../components/Channel/Channel";
import { getSelectedChannelData } from "../redux/actions/getQuestions.action";
import { getChannelDataById } from "../redux/selectors";
import QuestionsContainer from "../containers/QuestionsContainer";
import { Modal, Input, Button, Dropdown } from "react-bootstrap";
import CreateCollection from "../components/CreateCollection/CreateCollection";

export default function GridContainer({ channelData = [] }) {
  const dispatch = useDispatch();
  const getSelectedChannelDataById = useSelector(getChannelDataById);

  const [selectedChannel, setSelectedChannel] = useState(channelData?.[0]);
  const [show, setShow] = useState(false);

  const handleChangeChannel = (obj) => {
    setSelectedChannel(obj);
  };

  useEffect(() => {
    if (selectedChannel && selectedChannel?.channelId) {
      dispatch(getSelectedChannelData(selectedChannel?.channelId));
    }
  }, [selectedChannel]);

  const addCollection = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="grid-container">
      <div className="grid-item grid-item-1"></div>
      <div className="grid-item grid-item-2">
        <div className="grid-item grid-item-collection-header">
          <span>Create Collection</span>
          <span onClick={addCollection}>+</span>
        </div>
        <div className="grid-item grid-item-collection-list">
          {(channelData || []).map((item) => (
            <Channel
              item={item}
              handleSelect={handleChangeChannel}
              selectedChannelId={selectedChannel?.channelId}
            />
          ))}
        </div>
      </div>
      <div className="grid-item grid-item-3">
        <div className="grid-item grid-item-header"></div>
        <div className="grid-item grid-item-snippets">
          {getSelectedChannelDataById && getSelectedChannelDataById.length && (
            <QuestionsContainer channelData={getSelectedChannelDataById} />
          )}
        </div>
      </div>
      <Modal show={show} onHide={hideModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <CreateCollection />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
