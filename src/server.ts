import dotenv from 'dotenv';
dotenv.config();
import Hapi from '@hapi/hapi';
import { PORT } from './config/config';
import rootRoute from './routes/root.route';
import plugins from './plugins';

const serverPort = PORT || 3001;

const init = async () => {
  const server = Hapi.server({
    port: serverPort,
  });

  await server.register(plugins);

  server.route(rootRoute);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
