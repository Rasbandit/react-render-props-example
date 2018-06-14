import React from 'react';

class Cat extends React.Component {
  render() {
    console.log(this);
    const mouse = this.props.mouse;
    return (
      <img
        src="https://www.pngarts.com/files/1/Angry-Cat-PNG-Image-Background-264x279.png"
        style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
      />
    );
  }
}

export default Cat;
