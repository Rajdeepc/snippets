import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getChannelData } from "./redux/actions/getQuestions.action";
import { getAllChannelsData } from "./redux/selectors";


const GridContainer = React.lazy(() => import("./containers/GridContainer")); // Lazy-loaded"./containers/GridContainer";



function App() {
  const dispatch = useDispatch();
  const allChannels = useSelector(getAllChannelsData);


  useEffect(() => {
    dispatch(getChannelData());
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<h1>"Loading....."</h1>}>
        { allChannels && allChannels?.length && <GridContainer channelData={allChannels} /> }
      </Suspense>
    </div>
  );
}

export default App;
