import React from "react";
import { connect } from "react-redux";
import { deleteIdea } from "../../actions";
import "./Card.css";

const Card = ({ id, title, description, deleteIdea }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="delete-btn" onClick={() => deleteIdea(id)}>
        🗑️
      </button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deleteIdea: (id) => dispatch(deleteIdea(id)),
});
export default connect(null, mapDispatchToProps)(Card);
