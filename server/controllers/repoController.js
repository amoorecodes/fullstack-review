const express = require('express');
const mongoose = require('mongoose');

// const db = require('./../../database/index.js');
const { save, db } = require('./../../database/index.js');
const getReposByUsername = require('./../../helpers/github.js');
const Repo = require('./../../database/models/Repo.js');


module.exports.loadRepos = (req,res) => {

    Repo.find({})
        .sort({ forks: -1})
        .limit(25)
        .exec((err, results) => {
        if (err) throw err; 
        // console.log('about to send results', results);
        res.status(200).send(results);
    });
    
};

module.exports.post = (req,res) => {
    // console.log(save, 'save');
    Repo.find({username: req.body.username}, (err, results) => {
        // console.log(results, 'resutls');
        if(err) throw err;
            // console.log(results.data, 'rse)')
        if(results) {
            res.status(200).send('repos alerady exist in database');
        } else {
            getReposByUsername(req.body.username, (data) => {
                save(data, (message) => console.log(message));
                res.status(201).send(data);
            });
        }
    });


    // console.log(req.query, ' this is body')
    //     Repo.find( {userName: req.query.username }, null, 
    //     { limit: 25 }, (err, results) => {
    //         if(err) console.log('no bueno get from db');
    //         res.status(200).send(results)
    //     });
    //     console.log('this is get request with these params: ');
};