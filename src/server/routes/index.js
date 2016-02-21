var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/about', function(req, res, next) {
    res.render('about', {title: 'Mike', about: ['likes cats more than dogs', 'races cars', 'loves building things']})
});

module.exports = router;
