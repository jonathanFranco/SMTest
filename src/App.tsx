import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";
import Routes from "./routes/Routes";

const App = () => {
  const [load, setLoad] = useState(true);

  function loaderInitial() {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }

  useEffect(() => {
    loaderInitial();
  }, []);

  return (
    <Fragment>
      <Loader loader={load} />

      {!load && (
        <>
          <Router>
            <Routes />
          </Router>
        </>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </Fragment>
  );
};

export default App;
