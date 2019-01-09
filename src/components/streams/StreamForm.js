import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const isError = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={isError}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    ); //passing in all props to input object
  };

  onSubmit = formValues => {
    //redux form handles preventing default behavior
    //also passes values from the form by default
    this.props.onSubmit(formValues);
  };

  //semantc ui won't show errors unless you throw an error in the classname
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui red button">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  let errors = {};
  if (!formValues.title) {
    errors.title = "Must enter a title"; //object prop needs to have same name as field
  }
  if (!formValues.description) {
    errors.description = "Must enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
