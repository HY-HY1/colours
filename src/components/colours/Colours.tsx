import React, { FC } from 'react';

interface GenerateProps {
  colourCode?: string;
}

export const Colours: FC<GenerateProps> = ({ colourCode }) => {
  const divStyle = {
    backgroundColor: colourCode ? `#${colourCode}` : 'transparent',
    width: '100%',  // Adjust the width based on your requirements
    height: '500px', // Adjust the height based on your requirements
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #000',  // Add a border for better visibility
  };

  console.log(colourCode)

  return (
    <>
      <div style={divStyle}>
        {colourCode ? (
          <span style={{ color: 'black' }}><p>{`#${colourCode}`}</p></span>
        ) : (
          'No Colour'
        )}
      </div>
    </>
  );
};

export default Colours;
