const axios = require('axios');
const FormData = require('form-data');

class Api {
  constructor(projectKey) {
    this.projectKey = projectKey;
    axios.defaults.baseURL = 'https://api.cumulus.tophat.cloud';
  }

  async createThunder(name, url, link, priority) {
    const data = new FormData();
    data.append('project', this.projectKey);
    data.append('thunder_name', name);
    data.append('url', url);
    data.append('rel_link', link);
    data.append('priority', priority);

    axios.post('/thunder/create', data, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      }
    });
  }
}

module.exports = Api;
