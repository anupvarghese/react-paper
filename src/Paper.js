import React, { Component, PropTypes } from 'react';
import paperjs from 'paper';

const propTypes = {
  children: PropTypes.object.isRequired,
};

class Paper extends Component {
  constructor(props) {
    super(props);
    this.paper = null;
  }

  setPaper() {
    if (!this.paper) {
      this.paper = new paperjs.PaperScope();
      this.paper.setup(this.canvas);
      this.paper.view.play();
    }
    return this.paper;
  }

  render() {
    return (
      <canvas ref={(c) => { this.canvas = c; }}>
        {
          React.cloneElement(this.props.children, {
            paper: this.setPaper(),
          })
        }
      </canvas>
    );
  }
}

Paper.propTypes = propTypes;

export default Paper;
