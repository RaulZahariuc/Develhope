import React from 'react';
import Color from './Color';

class Colors extends React.Component {
  render() {
    const { colors } = this.props;
    return (
      <div>
        <h2>Colors:</h2>
        <ul>
          {colors.map((color) => (
            <Color key={color.id} color={color} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Colors;

