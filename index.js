const server = require('./server');

const PORT = 5000;

server.listen(PORT, () =>
  console.log(`Server awaits thou command at port ${PORT}`),
);
