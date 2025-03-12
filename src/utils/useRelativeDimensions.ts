import {useWindowDimensions} from 'react-native';

const DESIGN_HEIGHT = 822;
const DESIGN_WIDTH = 428;

export const useRelativeDimensions = () => {
  const {width: DEVICE_WIDTH, height: DEVICE_HEIGHT} = useWindowDimensions();

  const relativeHeight = (sourceHeight: number) => (sourceHeight / DESIGN_HEIGHT) * DEVICE_HEIGHT;
  const relativeWidth = (sourceWidth: number) => (sourceWidth / DESIGN_WIDTH) * DEVICE_WIDTH;

  return {relativeHeight, relativeWidth};
};