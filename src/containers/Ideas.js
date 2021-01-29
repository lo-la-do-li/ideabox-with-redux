import React from "react";
import Card from "../components/Card/Card";
import { connect } from "react-redux";
import "./Ideas.css";

const Ideas = ({ ideas }) => {
  const ideaCards = ideas.map((idea) => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        // deleteIdea={props.deleteIdea}
      />
    );
  });
  return <section className="ideas-container">{ideaCards}</section>;
};
const mapStateToProps = (state) => ({
  ideas: state.ideas,
});
export default connect(mapStateToProps)(Ideas);
