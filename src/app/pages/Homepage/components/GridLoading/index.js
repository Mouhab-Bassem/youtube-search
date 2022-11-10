import React from "react";

const GridLoading = () => {
  return (
    <div className="data-grid">
      <div className="data-item">
        <div className="data-item-img">
          <div className="card-loader image"></div>
        </div>
        <div className="data-item-content">
          <div className="card-loader data"></div>
          <div className="card-loader data"></div>
          <div className="card-loader content"></div>
        </div>
      </div>
      <div className="data-item">
        <div className="data-item-img">
          <div className="card-loader image"></div>
        </div>
        <div className="data-item-content">
          <div className="card-loader data"></div>
          <div className="card-loader data"></div>
          <div className="card-loader content"></div>
        </div>
      </div>
      <div className="data-item">
        <div className="data-item-img">
          <div className="card-loader image"></div>
        </div>
        <div className="data-item-content">
          <div className="card-loader data"></div>
          <div className="card-loader data"></div>
          <div className="card-loader content"></div>
        </div>
      </div>
    </div>
  );
};

export default GridLoading;
