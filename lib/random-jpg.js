const fs = require('fs');
const jpeg = require('jpeg-js');
const width = 320,
  height = 180;
let frameData = new Buffer(width * height * 4);
let i = 0;
let redA = Math.round(Math.random() * 8);
let redB = Math.round(Math.random() * 8);
let greenA = Math.round(Math.random() * 8);
let greenB = Math.round(Math.random() * 8);
let blueA = Math.round(Math.random() * 8);
let blueB = Math.round(Math.random() * 8);

while (i < frameData.length) {
  frameData[i++] = `0x${redA}${redB}`; // red
  frameData[i++] = `0x${greenA}${greenB}`; // green
  frameData[i++] = `0x${blueA}${blueB}`; // blue
  frameData[i++] = 0xff; // alpha - ignored in JPEGs
}
const rawImageData = {
  data: frameData,
  width: width,
  height: height,
};
const jpegImageData = jpeg.encode(rawImageData, 50);
console.log(jpegImageData);
/*
{ width: 320,
  height: 180,
  data: <Buffer 5b 40 29 ff 59 3e 29 ff 54 3c 26 ff 55 3a 27 ff 5a 3e 2f ff 5c 3c 31 ff 58 35 2d ff 5b 36 2f ff 55 35 32 ff 5a 3a 37 ff 54 36 32 ff 4b 32 2c ff 4b 36 ... > }
*/
// write to file
fs.writeFileSync('image5.jpg', jpegImageData.data);
