import Head from "next/head";

import NavBar from "../components/NavBar";
import MarketPlace from "../screens/MarketPlace";

const Market = () => (
  <>
    <Head>
      <title>NGO</title>
    </Head>
    <div className="marketplaceBg">
      <NavBar />
      <MarketPlace />
    </div>
  </>
);

export default Market;
