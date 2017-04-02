import React, { Component, PropTypes } from 'react';

const propTypes = {
  children: PropTypes.object.isRequired,
  paper: PropTypes.object.isRequired,
};

class Layer extends Component {
  constructor(props) {
    super(props);
    this.setLayer = this.setLayer.bind(this);
  }
  setLayer() {
    if (!this.layer) {
      this.layer = new this.props.paper.Layer();
    }
    return this.layer;
  }

  render() {
    return (
      React.cloneElement(this.props.children, {
        paper: this.props.paper,
        layer: this.setLayer(),
      })
    );
  }
}

Layer.propTypes = propTypes;

export default Layer;
