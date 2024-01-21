import React from 'react';

function MouseClicker({ name, imageSrc }) {
  const handleImageClick = (event) => {
    if (event.target.tagName.toLowerCase() === 'button') {
      console.log(`Button clicked: ${name}`);
    } else {
      console.log(`Image clicked: ${imageSrc}`);
    }
  };

  return (
    <div>
      
      <button name={name} onClick={handleImageClick}>
        <img src={imageSrc} alt={`Button ${name}`} />
        Click me
      </button>
    </div>
  );
}

export default MouseClicker;
