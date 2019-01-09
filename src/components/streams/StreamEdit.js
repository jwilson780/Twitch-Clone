import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import StreamForm from "./StreamForm";
import { fetchStream, editStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  /*
   * initialValues is passed to the redux wrapped streamform (only pass what you need on the other side)
   */
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, "title", "description")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //need to use OwnProps b/c props has our id
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
