import React from 'react';

class Color extends React.Component {
  render() {
    const { color } = this.props;
    return <li>{color.name}</li>;
  }
}

export default Color;
