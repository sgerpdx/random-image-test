//const app = require('./lib/app');
const random = require('./lib/random-jpg');
const pool = require('./lib/utils/pool');

const PORT = process.env.PORT || 7890;

// app.listen(PORT, () => {
//   // eslint-disable-next-line no-console
//   console.log(`Started on ${PORT}`);
// });

random.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});

process.on('exit', () => {
  console.log('Goodbye!');
  pool.end();
});
