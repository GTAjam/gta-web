import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import "../global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import PacmanLoader from "react-spinners/PacmanLoader";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above



export default function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])


  return (
    <>
      {
        loading ?
          <div class="loader">
            <PacmanLoader color={'#FC6101'} loading={loading} size={50} />
          </div>

          :

          <Layout>
            <Component {...pageProps} />
          </Layout>

      }
    </>
  );
}
