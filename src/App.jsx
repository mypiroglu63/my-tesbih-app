import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TesbihList from "./components/TesbihList";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <TesbihList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
