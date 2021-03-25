import Head from "next/head";

import NavBar from "../components/NavBar";
import Home from "../screens/Home";

const App = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div className="homeBg">
      <NavBar />
      <Home />
    </div>
  </>
);

export default App;
