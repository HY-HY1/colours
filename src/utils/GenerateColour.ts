// utils/generateColour.ts
export const generateRandomColorCode = () => {
    const getRandomHex = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return `${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
  };
  
  export const generateRandomColorCodes = (count: number) => {
    return Array.from({ length: count }, generateRandomColorCode);
  };
  
  export const generateColourUrl = (count: number) => {
    const randomColorCodes = generateRandomColorCodes(count);
    return `/generate/${randomColorCodes.join('-')}`;
  };
  