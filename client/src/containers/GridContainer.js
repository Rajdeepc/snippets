import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Channel from "../components/Channel/Channel";
import { getSelectedChannelData } from "../redux/actions/getQuestions.action";
import { getChannelDataById } from "../redux/selectors";
import QuestionsContainer from "../containers/QuestionsContainer";
import { Modal, Input, Button, Dropdown } from "react-bootstrap";
import CreateCollectionModal from "../components/CreateCollectionModal/CreateCollectionModal";
import { getAllChannelsData } from "../redux/selectors";



export default function GridContainer({ channelData = [] }) {
  const dispatch = useDispatch();
  const allChannels = useSelector(getAllChannelsData);

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
  }, [dispatch, selectedChannel]);

  // useEffect(() => {
  //   if (show) {
  //     // call the database to get list of exisitng channels
  //   }
  // }, [show]);

  const addCollection = useCallback(() => {
    setShow(true);
  }, []);

  const hideModal = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <div className="grid-container">
      <div className="grid-item grid-item-1"></div>
      <div className="grid-item grid-item-2">
        <div
          className="grid-item grid-item-collection-header"
          onClick={addCollection}
        >
          <span>Create Collection</span>
          <span>+</span>
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
          <Modal.Title>Create A New Snippet</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <CreateCollectionModal allChannels={allChannels} onClose={hideModal}/>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}
