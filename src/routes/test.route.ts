import { services } from '../config';

const testRoute = [
  {
    method: 'GET',
    path: '/',
    handler: () => {
      return services.testService.greet();
    },
  },
];

export default testRoute;
