import React, { useContext } from "react";
import { YoutubeDataContext } from "../../../context/youtubeData";
import Wrapper from "../../shell/Wrapper";
import DataList from "./components/DataList";
import GridLoading from "./components/GridLoading";

const Homepage = () => {
  const [data] = useContext(YoutubeDataContext);

  return (
    <Wrapper>
      <div className="wrapper">
        {data.loading ? (
          <GridLoading />
        ) : data.error ? (
          <p>Something went wrong!</p>
        ) : (
          data.data && <DataList item={data.data} />
        )}
      </div>
    </Wrapper>
  );
};

export default Homepage;
