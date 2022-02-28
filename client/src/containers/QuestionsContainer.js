import React, { Suspense, useCallback, useEffect, useState } from "react";
import Question from "../components/Question/Question";

const EditorContainer = React.lazy(() => import("./SolutionsContainer")); // Lazy-loaded

const Questions = ({ channelData=[] }) => {

  
  const [selectedItem, setSelectedItem] = useState(channelData?.[0]);

  useEffect(() => {
    if(channelData?.length){
      setSelectedItem(channelData?.[0])
    }
  }, [channelData]);


  const handleSelect = useCallback(
    (item) => {
      setSelectedItem(item);
    },
    []
  );

  return (
    <Suspense fallback={"Hi"}>
      <div className="questions-container">
        {(channelData || []).map((item) => (
          <Question
            item={item}
            selectedItemId={selectedItem?._id}
            handleClick={handleSelect}
          />
        ))}
      </div>
      <div className="solutions-container">
        {selectedItem && <EditorContainer selectedItem={selectedItem} />}
      </div>
    </Suspense>
  );
};

export default Questions;
