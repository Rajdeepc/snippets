import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Channel from "../components/Channel/Channel";
import { getSelectedChannelData } from '../redux/actions/getQuestions.action'
import { getChannelDataById } from '../redux/selectors'
import QuestionsContainer from '../containers/QuestionsContainer'


export default function GridContainer({ channelData = [] }) {

  const dispatch = useDispatch();
  const getSelectedChannelDataById = useSelector(getChannelDataById)


  const [selectedChannel, setSelectedChannel] = useState(channelData?.[0]);

  const handleChangeChannel = (obj) => {
    setSelectedChannel(obj);
  };

  useEffect(() => {
    if(selectedChannel && selectedChannel?.channelId){
      dispatch(getSelectedChannelData(selectedChannel?.channelId))
    }
  }, [selectedChannel])
  


  const addCollection = () => {
    
  }

  return (
    <div className="grid-container">
      <div className="grid-item grid-item-1"></div>
      <div className="grid-item grid-item-2">
        <div className="grid-item grid-item-collection-header">
          <span>Create Collection</span><span onClick={addCollection}>+</span>
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

        {/* { !!selectedChannel &&  !!selectedChannel.length &&
                        selectedChannel.
            } */}
      </div>
      <div className="grid-item grid-item-3">
        <div className="grid-item grid-item-header"></div>
        <div className="grid-item grid-item-snippets">
          { getSelectedChannelDataById && getSelectedChannelDataById.length && <QuestionsContainer channelData={getSelectedChannelDataById}/> }
        </div>
      </div>
    </div>
  );
}
