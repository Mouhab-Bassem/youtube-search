import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { AddCommasToNumber, GetTimeSince } from "../../utils";
import FilterIcon from "../../../../../assets/images/filter-results-button.png";
import { SearchYoutubeNext } from "../../../../../api/youtubeSearch";
import { SearchContext } from "../../../../../context/searchContext";
import { YoutubeDataContext } from "../../../../../context/youtubeData";
import GridLoading from "../GridLoading";
import Modal from "../../../../shell/Modal";

const DataList = (item) => {
  const { totalResults } = item.item.pageInfo;
  const [search] = useContext(SearchContext);
  const [data, dispatchData] = useContext(YoutubeDataContext);
  const [loading, setloading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadMore = () => {
    setloading(true);
    SearchYoutubeNext(search, data.data.nextPageToken)
      .then((response) => {
        setloading(false);
        dispatchData({ type: "fetchMore", payload: response.data });
      })
      .catch(() => {
        setloading(false);
        dispatchData({ type: "fetchFailed" });
      });
  };

  return (
    <div className="data-wrap">
      <div className="data-head">
        <p>About {AddCommasToNumber(totalResults)} results</p>
        <div className="asset-wrap" onClick={() => setIsModalOpen(true)}>
          <img
            className="asset-icon"
            src={FilterIcon}
            alt="Filter Icon"
            width="18"
          />
          <span>Filter</span>
        </div>
      </div>
      <div className="data-body">
        <div className="data-grid">
          {item.item.items.map((dataItem) => {
            return <DataListItem key={dataItem.etag} data={dataItem.snippet} />;
          })}
        </div>

        {loading ? <GridLoading /> : null}
      </div>
      {item.item.items.length !== item.item.pageInfo ? (
        <div className="data-foot">
          <button className="btn" onClick={loadMore}>
            Load more
          </button>
        </div>
      ) : null}

      {isModalOpen ? (
        <Modal setIsModalOpen={setIsModalOpen}>
          <p>Not implemented</p>
        </Modal>
      ) : null}
    </div>
  );
};

const DataListItem = (data) => {
  const { title, channelTitle, publishTime, description } = data.data;
  const { url } = data.data.thumbnails.medium;

  return (
    <div className="data-item">
      <div className="data-item-img">
        <img src={url} alt="title" />
      </div>
      <div className="data-item-content">
        <strong className="max-length-2">{title}</strong>
        <div className="data-info">
          <span>{channelTitle} - </span>
          <span>{GetTimeSince(publishTime)} ago</span>
        </div>
        <p className="max-length-2">{description}</p>
      </div>
    </div>
  );
};

DataList.propTypes = {
  item: PropTypes.shape({
    pageInfo: PropTypes.shape({
      totalResults: PropTypes.number,
    }),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        etag: PropTypes.string,
        snippet: PropTypes.shape({
          title: PropTypes.string,
          channelTitle: PropTypes.string,
        }),
      })
    ),
  }),
};

export default DataList;
