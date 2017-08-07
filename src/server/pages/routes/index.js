const router = require('express').Router();

/* GET home page. */
router.get('/', (req, res) => 
  res.render('./index', { user: req.user}));

router.get('/landing', (req, res, next) => {
    console.log(req.user);
    res.render('spa/landing', {user: req.user})
  
router.get('/profile', (req, res, next) => {
  res.render('user/profiles', {user: req.user})
})
  
});
  
  
module.exports = router; 