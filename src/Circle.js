import { Component, PropTypes } from 'react';

const propTypes = {
  paper: PropTypes.object.isRequired,
  fillColor: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  center: PropTypes.array.isRequired,
};

class Circle extends Component {
  constructor(props) {
    super(props);
    this.setCircle = this.setCircle.bind(this);
  }
  setCircle() {
    if (!this.circle) {
      this.circle = new this.props.paper.Path.Circle(this.props);
    }
    this.circle.fillColor = this.props.fillColor;
    this.circle.radius = this.props.radius;
    this.circle.center = this.props.center;
    return this.circle;
  }

  render() {
    return null;
  }
}

Circle.propTypes = propTypes;

export default Circle;
