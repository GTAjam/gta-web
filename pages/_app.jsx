import Layout from "../components/layout";
import "../global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import Member from "../components/team/member";


export default function MyApp({ Component, pageProps }) {

  const [data, setData] = useState([
    {
      img: 'https://source.unsplash.com/random/320x224?sig=1',
      text: 'Saswat Sahoo',
      designation: 'President'
    },
    {
      img: 'https://source.unsplash.com/random/320x224?sig=2',
      text: 'Abc',
      designation: 'Vice-President'
    },
    {
      img: 'https://source.unsplash.com/random/320x224?sig=3',
      text: 'Xyz',
      designation: 'Vice-Vice-President'
    },
    {
      img: 'https://media-exp1.licdn.com/dms/image/C4E22AQHC1aSFZM1-wA/feedshare-shrink_1280/0/1640509854384?e=1643241600&v=beta&t=uKQXqkIjRJGdoVisiJEPIT0jtyhAPwoIc2Omseb5Lmk',
      text: '123',
      designation: 'Vice-Vice-Vice-President'
    },

  ]);

  return (
    // <Layout>
    //   <Component {...pageProps} />

    //   <Member data={data} />

    // </Layout>

    <Member data={data} />
  );
}
