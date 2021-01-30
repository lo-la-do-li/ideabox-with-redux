import React, { Component, useState } from "react";
import { addIdea } from "../../actions";
import { connect } from "react-redux";
import "./Form.css";

const AddIdeaForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    event.target.name === "title"
      ? setTitle(event.target.value)
      : setDescription(event.target.value);
  };

  const submitIdea = (event) => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      title,
      description,
    };
    props.addIdea(newIdea);
    clearInputs();
  };

  const clearInputs = () => {
    setTitle("");
    setDescription("");
  };
  return (
    <div className="add-idea-form">
      <form>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(event) => handleChange(event)}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={(event) => handleChange(event)}
        />
        <span>
          <button onClick={submitIdea}>Submit</button>
        </span>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addIdea: (newIdea) => dispatch(addIdea(newIdea)),
});
export default connect(null, mapDispatchToProps)(AddIdeaForm);
