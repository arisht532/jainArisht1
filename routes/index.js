// Controllers = routers
var express = require('express');
var router = express.Router();

/* GET home page. */
// GET handler for // < root of the site
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Everyone!' });
});
// GET handler for // < root of the site
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});
// GET handler for // < root of the site
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
// GET handler for // < root of the site
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});

// GET handler for //about
// Considering About is a page part of Landing Section
// router.get('/about', (req, res, next) => {
//   // first param is view name
//   // second is json object with data for the view
//   res.render('about', { title: 'About Us'});
// });

module.exports = router;
