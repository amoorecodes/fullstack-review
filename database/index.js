const mongoose = require('mongoose');
const Repo = require('./models/Repo.js');
mongoose.connect('mongodb://userUno:userUno1st@ds133550.mlab.com:33550/github');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => db.);

/* maybe err, data? */ 
let save = (data) => {

  data.forEach( (instance) => {
    // console.log(instance.id, 'instance')
    let newEntry = new Repo({
      repoID: instance.id,
      repoName: instance.name,
      userName: instance.owner.login,
      forks: instance.forks,
      starts: instance.stargazers_count
    });

    newEntry.save((error, repository) => {
      if (error) throw error;
      console.log('added to database')
    })
  });
}

module.exports.save = save;
module.exports.db = db;