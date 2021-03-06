var express = require('express'),
    router  = express.Router();

var usersController = require('../controllers/usersController');
var authenticationsController = require('../controllers/authenticationsController');
var playlistsController = require('../controllers/playlistsController');

router.route('/')
  .get(usersController.usersIndex);

router.route('/users')
  .get(usersController.usersIndex);

router.route('/users/:id')
  .get(usersController.usersShow)
  .patch(usersController.usersUpdate)
  .delete(usersController.usersDelete);

router.route('/users/search')
  .post(usersController.usersSearch);

router.route("/playlists")
  .get(playlistsController.playlistsIndex)
  .post(playlistsController.playlistsCreate);
  
router.route("/playlists/:id")
  .get(playlistsController.playlistsShow)
  .put(playlistsController.playlistsUpdate)
  .delete(playlistsController.playlistsDelete);

router.route("/playlists/:id/add")
  .put(playlistsController.playlistsAddVideo);

router.route('/login').post(authenticationsController.login);
router.route('/register').post(authenticationsController.register);
router.route('/auth/facebook').post(authenticationsController.facebook);

module.exports = router;
