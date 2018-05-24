const mongoose = require('mongoose');

let repoSchema = mongoose.Schema({
    repoID: { type: Number, unique: true },
    repoName: String,
    userName: String,
    forks: Number,
    starts: Number
});

let Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;