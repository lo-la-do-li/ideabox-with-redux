import React from "react";
import Ideas from "../../containers/Ideas/Ideas";
import AddIdeaForm from "../../containers/AddIdeaForm/AddIdeaForm";
import "./App.css";

const App = () => {
  return (
    <main className="App">
      <h1 className="app-title">Lola's Ideabox</h1>
      <AddIdeaForm />
      <Ideas />
    </main>
  );
};

export default App;
