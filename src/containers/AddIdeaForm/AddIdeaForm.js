import React, { Component } from "react";
import { addIdea } from "../../actions";
import { connect } from "react-redux";
import "./Form.css";

class AddIdeaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitIdea = (event) => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      ...this.state,
    };
    this.props.addIdea(newIdea);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ title: "", description: "" });
  };
  render() {
    return (
      <div className="add-idea-form">
        <form>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={(event) => this.handleChange(event)}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={this.state.description}
            onChange={(event) => this.handleChange(event)}
          />
          <span>
            <button onClick={this.submitIdea}>Submit</button>
          </span>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addIdea: (newIdea) => dispatch(addIdea(newIdea)),
});
export default connect(null, mapDispatchToProps)(AddIdeaForm);
