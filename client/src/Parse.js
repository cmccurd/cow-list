const axios = require('axios');

const server = 'http://localhost:3000/api/cows';

var Parse = {

  get: axios.get(server),

  post: (obj) => {
    return axios.post(server, obj)
  },

  delete: (obj) => {
    return axios.delete(server, {
      data: obj
    });
  },

  put: (obj) => {
    return axios.put(server, {
      data: obj
    });
  }
};

export default Parse;