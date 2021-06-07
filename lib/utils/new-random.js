const fs = require('fs');
const jpeg = require('jpeg-js');

const newRandomColor = () => {
  const width = 320,
    height = 180;
  //a buffer is an array:
  let frameData = new Buffer(width * height * 4);
  let i = 0;
  const randInteger = () => {
    return Math.round(Math.random() * 8);
  };
  let randRed = `0x${randInteger()}${randInteger()}`;
  let randGreen = `0x${randInteger()}${randInteger()}`;
  let randBlue = `0x${randInteger()}${randInteger()}`;

  while (i < frameData.length) {
    frameData[i++] = randRed; // red
    frameData[i++] = randGreen; // green
    frameData[i++] = randBlue; // blue
    frameData[i++] = 0xff; // alpha - ignored in JPEGs
  }
  const rawImageData = {
    data: frameData,
    width: width,
    height: height,
  };
  const jpegImageData = jpeg.encode(rawImageData, 50);
  console.log(jpegImageData);

  fs.writeFileSync('image8.jpg', jpegImageData.data);
  return jpegImageData.data;
};

module.exports = { newRandomColor };
