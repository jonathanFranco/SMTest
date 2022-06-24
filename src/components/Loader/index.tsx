import React from "react";

const Loader = ({ loader }: any): JSX.Element => {
  return (
    <>
      {loader ? (
        <div
          className="h-screen w-100 d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="spinner-border text-blue-500 w-20 h-20" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Loader;
