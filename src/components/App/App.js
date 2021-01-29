import React, { Component } from "react";
import Ideas from "../../containers/Ideas";
import Form from "../../containers/Form";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        {
          id: 1,
          title: "Kitten Mittens",
          description: "Because they're smitten",
        },
        { id: 2, title: "Humidifier", description: "Because CO is dry AF" },
      ],
    };
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  };

  makeNewId = () => {
    const newId = this.state.ideas.length + 1;
    return newId;
  };

  deleteIdea = (id) => {
    // console.log(id)
    const filteredIdeas = this.state.ideas.filter((idea) => idea.id !== id);
    this.setState({ ideas: filteredIdeas });
  };

  render() {
    return (
      <main className="App">
        <h1 className="Title">Lola's Ideabox</h1>
        <Form addIdea={this.addIdea} makeNewId={this.makeNewId} />
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </main>
    );
  }
}

export default App;
