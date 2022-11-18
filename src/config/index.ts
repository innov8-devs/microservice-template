import TestService from '../services/test.service';

// Register your services here. This is just for IOC
export const services = {
  testService: new TestService(),
};
