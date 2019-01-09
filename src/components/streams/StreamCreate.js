import React from "react";
import { connect } from "react-redux";

import StreamForm from "./StreamForm";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    //redux form handles preventing default behavior
    //also passes values from the form by default
    this.props.createStream(formValues);
  };

  //semantc ui won't show errors unless you throw an error in the classname
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
