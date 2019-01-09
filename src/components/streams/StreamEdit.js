import React from "react";
import { connect } from "react-redux";

import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
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
  {
    fetchStream
  }
)(StreamEdit);
