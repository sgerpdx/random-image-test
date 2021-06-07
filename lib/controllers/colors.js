const { Router } = require('express');
const { newRandomColor } = require('../random-jpg');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    // const colorData = newRandomColor;
    // res.send(colorData);

    // const newImage = <img src="../../image8.jpg" />;
    // res.send(newImage);

    const response = 'Hey there';
    res.send(response);
  } catch (err) {
    next(err);
  }
});
