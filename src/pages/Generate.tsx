// Generate.tsx
import React, { FC, useEffect } from 'react';
import { Colours } from '../components/colours/Colours';
import { useParams, useNavigate } from 'react-router-dom';
import style from '../styles/generate.module.css';
import { Utilitybar } from '../layout/Utilitybar';
import { generateColourUrl } from '../utils/GenerateColour';

export const Generate: FC = () => {

  const { codes } = useParams<{ codes: string }>();
  const navigate = useNavigate();

  const colorCodes = codes?.split('-') || [];

  console.log('Color Codes:', colorCodes);


  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        generateColour();
      }
    };
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []); 

  const generateColour = () => {
    const newUrl = generateColourUrl(5);

    console.log('Clicked');

    navigate(newUrl);
  };

  return (
    <>
      <Utilitybar />
      <div className={style.container}>
        {colorCodes.map((colour) => (
          <div key={colour} className={style.item}>
            <Colours colourCode={colour} />
          </div>
        ))}
      </div>
    </>
  );
};
