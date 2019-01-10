import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions = () => {
    return (
      <React.Fragment>
        <button onClick={this.onDelete} className="ui button negative">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
      //have to use fragment b/c we can't do mutliple JSX elements to a single var
    );
  };

  renderContent = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with the title: ${
      this.props.stream.title
    }`;
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  {
    fetchStream,
    deleteStream
  }
)(StreamDelete);
