import Head from "next/head";

import NavBar from "../components/NavBar";
import CreatePool from "../components/CreatePool";

const Create = () => (
  <>
    <Head>
      <title>Create</title>
    </Head>
    <div className="createBg">
      <NavBar />
      <CreatePool />
    </div>
  </>
);

export default Create;
