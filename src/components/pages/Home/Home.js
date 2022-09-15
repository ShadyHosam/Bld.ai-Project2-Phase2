import Header from "../../components/Widgets/Header";
import Main from "../../components/Widgets/Main";
import React from "react";
function Home({ searchVal }) {
  return (
    <div className="App">
      <Header />
      <Main searchVal={searchVal} />
    </div>
  );
}

export default Home;
