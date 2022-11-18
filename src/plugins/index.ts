import hapiInert from '@hapi/inert';
import hapiSwagger from 'hapi-swagger';
import Pack from '../../package.json';
import hapiVision from '@hapi/vision';
import { isDev } from '../config/config';

const swaggerOptions = {
  schemes: [isDev ? 'http' : 'https'],
  info: { title: 'HighTable Service', version: Pack.version },
  jsonEditor: true,
  documentationPath: '/docs',
  securityDefinitions: {
    jwt: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  security: [{ jwt: [] }],
};

const plugins = [
  { plugin: hapiInert },
  { plugin: hapiVision },
  {
    plugin: hapiSwagger,
    options: swaggerOptions,
  },
];

export default plugins;
