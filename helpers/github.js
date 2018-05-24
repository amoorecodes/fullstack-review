const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {

  let options = {
    url: (`https://api.github.com/users/${username}/repos`),
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  const retrieve = (err, res, data) => {
    // console.log( JSON.parse(data), 'res and data')
    if (!err && res.statusCode === 200) {
      let repos = JSON.parse(data); //do we need to parse if we have data parser? 
      callback(repos);
    }
  }

  request(options, retrieve);



}

module.exports = getReposByUsername;