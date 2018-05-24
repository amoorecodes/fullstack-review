const express = require('express');
const mongoose = require('mongoose');

// const db = require('./../../database/index.js');
const { save, db } = require('./../../database/index.js');
const getReposByUsername = require('./../../helpers/github.js');
const Repo = require('./../../database/models/Repo.js');


module.exports.loadRepos = (req,res) => {

    Repo.find(null, null, { limit:25 }, (err, results) => {
        if (err) throw err; 
        console.log('about to send results', results);
        res.status(200).send(results);
    })
};

module.exports.post = (req,res) => {
    // console.log(save, 'save');
    Repo.find({username: req.body.username}, null, {limit: 25}, (err, results) => {
        // console.log(results, 'resutls');
        if(err) throw err;
        if(results.data) {
            res.status(200).send(results);
        } else {
            getReposByUsername(req.body.username, (data) => {
                save(data);
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