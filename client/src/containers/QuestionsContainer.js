import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuestionsByChannelID } from "../store/actions/getQuestions.action";
import Question from "../components/Question/Question";

const EditorContainer = React.lazy(() => import("./EditorContainer")); // Lazy-loaded

const Questions = ({ channelId }) => {
  const getAllQuestions = useSelector(
    (state) => state.QuestionsReducer.allQuestionsByChannelID
  );
  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(getAllQuestions?.[0]);

  useEffect(() => {
    // call the getQuestions API with channel Id
    dispatch(getQuestionsByChannelID());
  }, []);


  const handleSelect = useCallback(
    (item) => {
      setSelectedItem(item);
      setSelectedIndex(item._id);
    },
    []
  );

  return (
    <Suspense fallback={"Hi"}>
      <div className="questions-container">
        {(getAllQuestions || []).map((item) => (
          <Question
            item={item}
            selectedIndex={selectedIndex}
            handleClick={handleSelect}
          />
        ))}
      </div>
      <div className="solutions-container">
        {selectedItem && <EditorContainer item={selectedItem} />}
      </div>
    </Suspense>
  );
};

export default Questions;
