import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuestionsByChannelID } from "../store/actions/getQuestions.action";
import Snippets from "../components/Snippets/Snippets";

const Questions = ({ channelId }) => {
  const getAllQuestions = useSelector((state) => state.QuestionsReducer.allQuestionsByChannelID);
  const dispatch = useDispatch();


  const [ selectedIndex, setSelectedIndex ] = useState(0)

  useEffect(() => {
    // call the getQuestions API with channel Id
    dispatch(getQuestionsByChannelID());
  }, []);

  const handleSelect = (value) => {
    setSelectedIndex(value)
  }

  return (
    <div>
      {(getAllQuestions || []).map((item) => (
        <Snippets item={item} selectedIndex={selectedIndex} handleClick={handleSelect} />
      ))}
    </div>
  );
};


export default (Questions)
