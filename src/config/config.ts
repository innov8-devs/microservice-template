export const { PORT, NODE_ENV } = process.env;
export const isDev = NODE_ENV === 'development';

const envs = {
  PORT,
};
const list = Object.keys(envs);
const errors = {};
for (const listItem of list) {
  if (!envs[listItem]) {
    errors[listItem] = `${listItem} is not defined`;
  }
}
if (Object.keys(errors).length > 0) {
  const message = `ENV Error, the following ENV are not set:`;
  console.error(message);
  console.table(errors);
  throw new Error('Fix Env and rebuild');
}
