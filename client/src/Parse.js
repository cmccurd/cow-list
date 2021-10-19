const axios = require('axios');

const server = 'http://localhost:3000/api/cows';

var Parse = {

  get: axios.get(server),

  post: (obj) => {
    return axios.post(server, obj)
  }
};

export default Parse;