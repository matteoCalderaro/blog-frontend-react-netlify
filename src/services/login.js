import axios from 'axios';
const baseUrl = 'https://blog-be-node-flyio.fly.dev/api/login';

const login = async credentials => {
  let response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default { login };
