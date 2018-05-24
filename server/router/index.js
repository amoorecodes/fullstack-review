const router = require('express').Router();
const repoController = require('./../controllers/repoController.js');


// router.route('/')
//     .get(repoController.loadRepos)
//     // .post(repoController.post);

router.route('/repos')
    .get(repoController.loadRepos)
    .post(repoController.post);




module.exports = router;